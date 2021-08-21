import { Empresa } from "./empresa";

export class Noticia {
    id: number;
    titulo: string;
    resumen: string;
    imagen: string;
    contenidoHTML: string;
    publicada: boolean;
    fechaPublicacion: Date;
    empresa: Empresa;

}