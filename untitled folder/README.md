## Install
### Step 1
> npm init --y

### Step 2
> npm install --save-dev jest

### Step 3
Add this to package.json:
```
{
  "name": "examreviewunittesting",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "directories": {
    "test": "test"
  },
  "scripts": {
    "test": "jest --coverage"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jest": "^29.3.1"
  }
}
```

### Step 4 (Optional if 'jest' cannot be recognized)
#### Windows
> npm install jest -g

#### MAC
> sudo npm install jest -g

## Run the code using one of the following below:
### Option 1
> npm test

### Option 2
> jest

### Option 3
> npm test --coverage
