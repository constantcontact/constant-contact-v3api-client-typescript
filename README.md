# Constant Contact API Typescript SDK
SDK version 1.5.0

This repository contains a Typescript SDK for the public Constant Contact API. The code was generated using [openapi-generator](https://github.com/OpenAPITools/openapi-generator).

## Installing
You can install this library using npm:
`npm install ctct-api-client`

## Getting Started
This example demonstrates using an access token to send a request.
> You will need to provide a valid access token to successfully send API requests.
```typescript
import { Configuration, SegmentsApi, GetAccountSegments200Response } from 'ctct-api-client';

const bearerAccessToken = "eyJraW....";
const configuration: Configuration = new Configuration({ accessToken: bearerAccessToken});
const segmentsApi = new SegmentsApi(configuration);
segmentsApi.getAllSegments().then(response => {
    console.log(response)
  }).catch(error => {
    console.log(error)
  })
```
