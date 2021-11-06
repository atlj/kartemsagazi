declare global {
    type StrapiImage = {
        url: string;
        previewUrl: string;
        name: string;
        id: string;
        height: number;
        width: number;
    };
    type Place = {
        id: string;
        name: string;
        image: StrapiImage;
        order: number;
        discount: string;
        description: string;
        location: {
            adress: string;
            district: string;
        };
    };
}
