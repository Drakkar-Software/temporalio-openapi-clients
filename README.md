# Temporal OpenApi clients

## Global configuration

```
export TEMPORAL_API_KEY=YOUR_TEMPORAL_API_KEY
export TEMPORAL_API_URL=YOUR_TEMPORAL_API_URl
```

## Typescript [![NPM](https://img.shields.io/npm/v/temporalio-openapi-client)](https://www.npmjs.com/package/temporalio-openapi-client)

### Install

```
npm i temporalio-openapi-client
yarn add temporalio-openapi-client
pnpm install temporalio-openapi-client
```

### Setup

```
pnpm install
pnpm build
```

### Usage

```
pnpm start
```

## Developers

### Regenerate client

Download the schema from https://github.com/temporalio/api:

```
wget https://raw.githubusercontent.com/temporalio/api/master/openapi/openapiv3.yaml -O schema.yaml
```

#### Typescript

```
pnpx openapi-typescript-codegen --input schema.yaml --output client/typescript --name TemporalIOAPIClient
```
