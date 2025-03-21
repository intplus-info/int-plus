/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: 'sanity.imagePaletteSwatch';
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: 'sanity.imagePalette';
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: 'sanity.imageDimensions';
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: 'sanity.fileAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: 'geopoint';
  lat?: number;
  lng?: number;
  alt?: number;
};

export type JobListing = {
  _id: string;
  _type: 'jobListing';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  location?: string;
  salary?: string;
  experience?: string;
  skills?: string;
  description?: string;
  responsibilities?: Array<string>;
  applicationDeadline?: string;
  categories?: 'full-time' | 'part-time' | 'contract' | 'remote' | 'internship';
  applicationLink?: string;
};

export type Post = {
  _id: string;
  _type: 'post';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  author?: {
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: 'author';
  };
  mainImage?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: 'image';
  };
  categories?: Array<{
    _ref: string;
    _type: 'reference';
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: 'category';
  }>;
  publishedAt?: string;
  body?: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  >;
};

export type Author = {
  _id: string;
  _type: 'author';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: 'reference';
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: 'image';
  };
  bio?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: 'span';
      _key: string;
    }>;
    style?: 'normal';
    listItem?: never;
    markDefs?: Array<{
      href?: string;
      _type: 'link';
      _key: string;
    }>;
    level?: number;
    _type: 'block';
    _key: string;
  }>;
};

export type Category = {
  _id: string;
  _type: 'category';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  description?: string;
};

export type Slug = {
  _type: 'slug';
  current?: string;
  source?: string;
};

export type BlockContent = Array<
  | {
      children?: Array<{
        marks?: Array<string>;
        text?: string;
        _type: 'span';
        _key: string;
      }>;
      style?: 'normal' | 'h1' | 'h2' | 'h3' | 'h4' | 'blockquote';
      listItem?: 'bullet';
      markDefs?: Array<{
        href?: string;
        _type: 'link';
        _key: string;
      }>;
      level?: number;
      _type: 'block';
      _key: string;
    }
  | {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      alt?: string;
      _type: 'image';
      _key: string;
    }
>;

export type SanityImageCrop = {
  _type: 'sanity.imageCrop';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: 'sanity.imageHotspot';
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: 'sanity.imageAsset';
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: 'sanity.assetSourceData';
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: 'sanity.imageMetadata';
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes =
  | SanityImagePaletteSwatch
  | SanityImagePalette
  | SanityImageDimensions
  | SanityFileAsset
  | Geopoint
  | JobListing
  | Post
  | Author
  | Category
  | Slug
  | BlockContent
  | SanityImageCrop
  | SanityImageHotspot
  | SanityImageAsset
  | SanityAssetSourceData
  | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./sanity/lib/query.ts
// Variable: JOB_LISTING_QUERY
// Query: *[_type == "jobListing"] {  _id,  title,  slug,  location,  salary,  experience,  skills,  description,  responsibilities,  applicationDeadline,  categories,  applicationLink}
export type JOB_LISTING_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: Slug | null;
  location: string | null;
  salary: string | null;
  experience: string | null;
  skills: string | null;
  description: string | null;
  responsibilities: Array<string> | null;
  applicationDeadline: string | null;
  categories: 'contract' | 'full-time' | 'internship' | 'part-time' | 'remote' | null;
  applicationLink: string | null;
}>;
// Variable: POST_QUERY
// Query: *[_type == "post"] {  _id,  title,  slug { current },  author-> { _id, name, image },  mainImage { asset-> { url }, alt },  categories[]-> { _id, title },  publishedAt,  body}
export type POST_QUERYResult = Array<{
  _id: string;
  title: string | null;
  slug: {
    current: string | null;
  } | null;
  author: {
    _id: string;
    name: string | null;
    image: {
      asset?: {
        _ref: string;
        _type: 'reference';
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: 'image';
    } | null;
  } | null;
  mainImage: {
    asset: {
      url: string | null;
    } | null;
    alt: string | null;
  } | null;
  categories: Array<{
    _id: string;
    title: string | null;
  }> | null;
  publishedAt: string | null;
  body: Array<
    | {
        children?: Array<{
          marks?: Array<string>;
          text?: string;
          _type: 'span';
          _key: string;
        }>;
        style?: 'blockquote' | 'h1' | 'h2' | 'h3' | 'h4' | 'normal';
        listItem?: 'bullet';
        markDefs?: Array<{
          href?: string;
          _type: 'link';
          _key: string;
        }>;
        level?: number;
        _type: 'block';
        _key: string;
      }
    | {
        asset?: {
          _ref: string;
          _type: 'reference';
          _weak?: boolean;
          [internalGroqTypeReferenceTo]?: 'sanity.imageAsset';
        };
        hotspot?: SanityImageHotspot;
        crop?: SanityImageCrop;
        alt?: string;
        _type: 'image';
        _key: string;
      }
  > | null;
}>;
// Variable: PROJECT_SHOWCASE_QUERY
// Query: *[_type == "project"] {  _id,  title,  img {    asset-> {      url    },    alt  },  categories,  description,  timeTaken,  startDate,  completionDate,  methods,  technologies}
export type PROJECT_SHOWCASE_QUERYResult = Array<never>;
// Variable: UPCOMING_PROJECTS_QUERY
// Query: *[_type == "upcomingProject"] {  _id,  icon,  title,  category,  completion,  description}
export type UPCOMING_PROJECTS_QUERYResult = Array<never>;

// Query TypeMap
import '@sanity/client';
declare module '@sanity/client' {
  interface SanityQueries {
    '*[_type == "jobListing"] {\n  _id,\n  title,\n  slug,\n  location,\n  salary,\n  experience,\n  skills,\n  description,\n  responsibilities,\n  applicationDeadline,\n  categories,\n  applicationLink\n}': JOB_LISTING_QUERYResult;
    '*[_type == "post"] {\n  _id,\n  title,\n  slug { current },\n  author-> { _id, name, image },\n  mainImage { asset-> { url }, alt },\n  categories[]-> { _id, title },\n  publishedAt,\n  body\n}': POST_QUERYResult;
    '*[_type == "project"] {\n  _id,\n  title,\n  img {\n    asset-> {\n      url\n    },\n    alt\n  },\n  categories,\n  description,\n  timeTaken,\n  startDate,\n  completionDate,\n  methods,\n  technologies\n}': PROJECT_SHOWCASE_QUERYResult;
    '*[_type == "upcomingProject"] {\n  _id,\n  icon,\n  title,\n  category,\n  completion,\n  description\n}': UPCOMING_PROJECTS_QUERYResult;
  }
}
