import React from "react";
import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"
import * as dotenv from 'dotenv'
dotenv.config()


const client = sanityClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DB,
    useCdn: USE_CDN,
    apiVersion: API_VERSION,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

// RUN THIS to add exception for localhost 3000 CORS policy
// sanity cors add http://localhost:3000/

export default client;