const axios = require('axios');
const fs = require('fs');
const path = require('path');

class StrapiContentImporter {
  constructor(baseUrl, apiToken) {
    this.baseUrl = baseUrl;
    this.apiToken = apiToken;
    this.api = axios.create({
      baseURL: baseUrl,
      headers: {
        'Authorization': `Bearer ${apiToken}`,
        'Content-Type': 'application/json'
      }
    });
  }

  // Clean and map writing content fields to match schema
  cleanWritingContent(item) {
    const cleaned = { ...item };
    
    // Remove fields that don't exist in schema
    delete cleaned.evaluationRubric;
    delete cleaned.keyVocabulary;
    
    // Map keyVocabulary to vocabularyFocus if it exists
    if (item.keyVocabulary) {
      cleaned.vocabularyFocus = item.keyVocabulary;
    }
    
    return cleaned;
  }

  async importTags(tags) {
    console.log('Importing tags...');
    for (const tag of tags) {
      try {
        await this.api.post('/api/tags', { data: tag });
        console.log(`✓ Tag imported: ${tag.name}`);
      } catch (error) {
        if (error.response?.data?.error?.message?.includes('unique')) {
          console.log(`⚠ Tag already exists: ${tag.name}`);
        } else {
          console.log(`✗ Tag failed: ${tag.name} - ${error.response?.data?.error?.message || error.message}`);
        }
      }
    }
  }

  async importReadingContent(content) {
    console.log('Importing reading content...');
    for (const item of content) {
      try {
        await this.api.post('/api/reading-contents', { data: item });
        console.log(`✓ Reading content imported: ${item.title}`);
      } catch (error) {
        if (error.response?.data?.error?.message?.includes('unique')) {
          console.log(`⚠ Reading content already exists: ${item.title}`);
        } else {
          console.log(`✗ Reading content failed: ${item.title} - ${error.response?.data?.error?.message || error.message}`);
        }
      }
    }
  }

  async importWritingContent(content) {
    console.log('Importing writing content...');
    for (const item of content) {
      try {
        const cleanedItem = this.cleanWritingContent(item);
        await this.api.post('/api/writing-contents', { data: cleanedItem });
        console.log(`✓ Writing content imported: ${item.title}`);
      } catch (error) {
        if (error.response?.data?.error?.message?.includes('unique')) {
          console.log(`⚠ Writing content already exists: ${item.title}`);
        } else {
          console.log(`✗ Writing content failed: ${item.title} - ${error.response?.data?.error?.message || error.message}`);
        }
      }
    }
  }

  async importAll() {
    try {
      const contentDir = path.join(__dirname, '../content');
      console.log(`Looking for content in: ${contentDir}`);
      
      // List all files in content directory
      const files = fs.readdirSync(contentDir);
      console.log(`Found files: ${files.join(', ')}`);
      
      // Check and import tags
      const tagsFile = path.join(contentDir, 'tags.json');
      console.log(`Checking for tags file: ${tagsFile}`);
      if (fs.existsSync(tagsFile)) {
        console.log('✓ Found tags.json - importing...');
        const tagsData = JSON.parse(fs.readFileSync(tagsFile, 'utf8'));
        await this.importTags(tagsData);
      } else {
        console.log('✗ No tags.json found');
      }
      
      // Check and import reading content
      const readingFile = path.join(contentDir, 'reading-content.json');
      console.log(`Checking for reading file: ${readingFile}`);
      if (fs.existsSync(readingFile)) {
        console.log('✓ Found reading-content.json - importing...');
        const readingData = JSON.parse(fs.readFileSync(readingFile, 'utf8'));
        await this.importReadingContent(readingData);
      } else {
        console.log('✗ No reading-content.json found');
      }

      // Check and import writing content
      const writingFile = path.join(contentDir, 'writing-content.json');
      console.log(`Checking for writing file: ${writingFile}`);
      if (fs.existsSync(writingFile)) {
        console.log('✓ Found writing-content.json - importing...');
        const writingData = JSON.parse(fs.readFileSync(writingFile, 'utf8'));
        await this.importWritingContent(writingData);
      } else {
        console.log('✗ No writing-content.json found');
      }

      // Check and import week1 reading content
      const week1ReadingFile = path.join(contentDir, 'week1-reading.json');
      console.log(`Checking for week1 reading file: ${week1ReadingFile}`);
      if (fs.existsSync(week1ReadingFile)) {
        console.log('✓ Found week1-reading.json - importing...');
        const week1ReadingData = JSON.parse(fs.readFileSync(week1ReadingFile, 'utf8'));
        await this.importReadingContent(week1ReadingData);
      } else {
        console.log('✗ No week1-reading.json found');
      }

      console.log('\n✓ All available content imported successfully!');
    } catch (error) {
      console.error('Import failed:', error.message);
      console.error('Stack:', error.stack);
    }
  }
}

// Usage
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_TOKEN;

if (!STRAPI_TOKEN) {
  console.error('Please provide STRAPI_TOKEN environment variable');
  console.log('Get your token from: http://localhost:1337/admin/settings/api-tokens');
  process.exit(1);
}

console.log(`Connecting to: ${STRAPI_URL}`);
console.log(`Using token: ${STRAPI_TOKEN.substring(0, 20)}...`);
console.log(`Script location: ${__dirname}`);

const importer = new StrapiContentImporter(STRAPI_URL, STRAPI_TOKEN);
importer.importAll(); 