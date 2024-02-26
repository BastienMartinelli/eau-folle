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
   * Name — `string`
   *
   *
   */
  name?: string;

  /**
   * Slug (dans l'url) — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Categorie — `string`
   *
   *
   */
  categorty?: string;

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
   * Nom (dans l'url) — `string`
   *
   *
   */
  name?: string;

  /**
   * Titre de la page (visible sur la page) — `string`
   *
   *
   */
  title?: string;

  /**
   * Contenu — `blockContent`
   *
   *
   */
  content?: BlockContent;
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
