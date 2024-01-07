import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Post
 *
 *
 */
export interface Post extends SanityDocument {
  _type: "post";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;
}

/**
 * Product
 *
 *
 */
export interface Product extends SanityDocument {
  _type: "product";

  /**
   * Categorie — `string`
   *
   *
   */
  categorty?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Image Principale — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative Text — `string`
     *
     *
     */
    alt?: string;
  };

  /**
   * Titrage — `number`
   *
   *
   */
  strength?: number;

  /**
   * Volume — `array`
   *
   *
   */
  volume?: Array<SanityKeyed<number>>;

  /**
   * Description — `blockContent`
   *
   *
   */
  description?: BlockContent;
}

/**
 * Contacts
 *
 *
 */
export interface Contact extends SanityDocument {
  _type: "contact";

  /**
   * Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Téléphone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Adress — `array`
   *
   *
   */
  address?: Array<SanityKeyed<string>>;
}

/**
 * Pages
 *
 *
 */
export interface Pages extends SanityDocument {
  _type: "pages";

  /**
   * Titre — `string`
   *
   *
   */
  title?: string;

  /**
   * Contenue — `blockContent`
   *
   *
   */
  content?: BlockContent;

  /**
   * Nom de la page — `string`
   *
   *
   */
  name?: string;
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;

      /**
       * Alternative Text — `string`
       *
       *
       */
      alt?: string;
    }>
>;

export type Documents = Post | Product | Contact | Pages;
