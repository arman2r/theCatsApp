export interface ICats {
  collection: Array<ICat>
}

export interface ICat{
  id: string;
  reference_image_id: string;
  name: string;
  breedName: string;
  origin: string;
  affectionLevel: number;
  intelligence: number;
  imageUrl: string;
  description: string;
}
