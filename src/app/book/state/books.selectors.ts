import { createSelector, createFeatureSelector } from "@ngrx/store";
import { map } from "rxjs/operators";
import { Book } from "../model/books.model";
import { AppState } from "./book.state";


export const selectBooks = createSelector(
  (state: AppState) => state.books,
  (books: Book[]) => books
);

export const selectCollectionState = createFeatureSelector<
  AppState ,
string[]
>("collection");
/*
export const selectBookCollection = createSelector(
    selectBooks,
    selectCollectionState,
    (books: Array<Book>, collection: Array<string>) => {
      {
        let collect: (Book | undefined)[] = collection.map((id) =>
          books.find((book) => book.id === id)
        );
        let result = collect.filter<Book>(isNotNullOrUndefined);
        return result;
      }
    }
  );
  
  export function isNotNullOrUndefined<T>(
    input: null | undefined | T
  ): input is T {
    return input != null;
  }
  */
  
//;console.log('collection',collection)
export const selectBookCollection = createSelector(
  selectBooks,
  selectCollectionState,
  (books: Book[], collection: string[] )=> {
    return collection.map((id) => books.find((book) =>  book.id === id 
    ) ,console.log('collection',collection) )as Book[]
   
    
   
   }
);

//The selectors need to change because the type Book | undefined is not the same as the type Book in strict mode. Therefore, you need to use solutions as outlined in the comments here: https://github.com/microsoft/TypeScript/issues/16069.

//That's where I found the isNotNullOrUndefined function.

/*
// https://stackoverflow.com/questions/66820549/angular-in-strict-mode-with-ngrx

*/
const obj=[
  {
    "kind": "books#volume",
    "id": "-85-DwAAQBAJ",
    "etag": "Fgman3EK5MQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/-85-DwAAQBAJ",
    "volumeInfo": {
      "title": "El río de la conciencia",
      "authors": [
        "Oliver Sacks"
      ],
      "publisher": "Anagrama",
      "publishedDate": "2019-01-16",
      "description": "Libro póstumo de Oliver Sacks, con diez ensayos imprescindibles que demuestran su erudición y su capacidad divulgativa. Dos semanas antes de fallecer, Oliver Sacks dejó preparado para su publicación este volumen, que reúne diez textos de temáticas diversas unidos en torno de una pregunta central cuya respuesta persiguió el autor a lo largo de toda su obra: qué es lo que nos configura como humanos. El libro es una perfecta muestra de las virtudes de Sacks como ensayista: sus profundos conocimientos e innovadoras ideas en el campo de la neurología; la erudición nunca pedante que le permitía conectar ese saber con otras ciencias y con la cultura para ir más allá de la especialización; su enorme capacidad como divulgador y su seductora manera de explicar temas complejos con pasión de narrador, y, sobre todo, su curiosidad y sabiduría humanística casi infinitas.",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9788433939982"
        },
        {
          "type": "ISBN_10",
          "identifier": "843393998X"
        }
      ],
      "readingModes": {
        "text": true,
        "image": true
      },
      "pageCount": 232,
      "printType": "BOOK",
      "categories": [
        "Literary Collections"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "1.1.1.0.preview.3",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=-85-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=-85-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "es",
      "previewLink": "http://books.google.com.ar/books?id=-85-DwAAQBAJ&printsec=frontcover&dq=oliver+sacks&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.com.ar/books?id=-85-DwAAQBAJ&dq=oliver+sacks&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/El_r%C3%ADo_de_la_conciencia.html?hl=&id=-85-DwAAQBAJ"
    },
    "saleInfo": {
      "country": "AR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "AR",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.ar/books/download/El_r%C3%ADo_de_la_conciencia-sample-epub.acsm?id=-85-DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.ar/books/download/El_r%C3%ADo_de_la_conciencia-sample-pdf.acsm?id=-85-DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=-85-DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Libro póstumo de Oliver Sacks, con diez ensayos imprescindibles que demuestran su erudición y su capacidad divulgativa."
    }
  }
]

const objetBook=[
  {
    "kind": "books#volume",
    "id": "-85-DwAAQBAJ",
    "etag": "Fgman3EK5MQ",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/-85-DwAAQBAJ",
    "volumeInfo": {
      "title": "El río de la conciencia",
      "authors": [
        "Oliver Sacks"
      ],
      "publisher": "Anagrama",
      "publishedDate": "2019-01-16",
      "description": "Libro póstumo de Oliver Sacks, con diez ensayos imprescindibles que demuestran su erudición y su capacidad divulgativa. Dos semanas antes de fallecer, Oliver Sacks dejó preparado para su publicación este volumen, que reúne diez textos de temáticas diversas unidos en torno de una pregunta central cuya respuesta persiguió el autor a lo largo de toda su obra: qué es lo que nos configura como humanos. El libro es una perfecta muestra de las virtudes de Sacks como ensayista: sus profundos conocimientos e innovadoras ideas en el campo de la neurología; la erudición nunca pedante que le permitía conectar ese saber con otras ciencias y con la cultura para ir más allá de la especialización; su enorme capacidad como divulgador y su seductora manera de explicar temas complejos con pasión de narrador, y, sobre todo, su curiosidad y sabiduría humanística casi infinitas.",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9788433939982"
        },
        {
          "type": "ISBN_10",
          "identifier": "843393998X"
        }
      ],
      "readingModes": {
        "text": true,
        "image": true
      },
      "pageCount": 232,
      "printType": "BOOK",
      "categories": [
        "Literary Collections"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "1.1.1.0.preview.3",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=-85-DwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=-85-DwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "es",
      "previewLink": "http://books.google.com.ar/books?id=-85-DwAAQBAJ&printsec=frontcover&dq=oliver+sacks&hl=&cd=1&source=gbs_api",
      "infoLink": "http://books.google.com.ar/books?id=-85-DwAAQBAJ&dq=oliver+sacks&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/El_r%C3%ADo_de_la_conciencia.html?hl=&id=-85-DwAAQBAJ"
    },
    "saleInfo": {
      "country": "AR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "AR",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.ar/books/download/El_r%C3%ADo_de_la_conciencia-sample-epub.acsm?id=-85-DwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.ar/books/download/El_r%C3%ADo_de_la_conciencia-sample-pdf.acsm?id=-85-DwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=-85-DwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Libro póstumo de Oliver Sacks, con diez ensayos imprescindibles que demuestran su erudición y su capacidad divulgativa."
    }
  },
  {
    "kind": "books#volume",
    "id": "iw4UAgAAQBAJ",
    "etag": "mtiwy8KrUGA",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/iw4UAgAAQBAJ",
    "volumeInfo": {
      "title": "Alucinaciones",
      "authors": [
        "Oliver Sacks"
      ],
      "publisher": "Anagrama",
      "publishedDate": "2013-11-20",
      "description": "Oliver Sacks vuelve a hacer gala de su singular talento como narrador, su sentido del humor y su inmensa cultura para plantear cuestiones que ponen en entredicho nuestra percepción del mundo y, muchas veces, nuestra propia identidad. Desde las visiones religiosas y su explicación fisiológica hasta el uso de drogas psicodélicas como puerta a una percepción interior que los sentidos nos niegan, los relatos del doctor Sacks van más allá del mero historial médico y constituyen una auténtica historia cultural de la percepción, un estudio antropológico de una supuesta anormalidad que no es, en el fondo, más que el reverso de lo que normalmente conocemos como realidad. «Fascinante. La comprensión del doctor Sacks hacia sus pacientes y su perspectiva filosófica transforman simples casos clínicos en relatos que iluminan las complejidades del cerebro humano y los misterios de la mente humana» (Michiko Kakutani, New York Times).",
      "industryIdentifiers": [
        {
          "type": "ISBN_13",
          "identifier": "9788433934475"
        },
        {
          "type": "ISBN_10",
          "identifier": "8433934473"
        }
      ],
      "readingModes": {
        "text": true,
        "image": true
      },
      "pageCount": 352,
      "printType": "BOOK",
      "categories": [
        "Science"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": true,
      "contentVersion": "1.7.7.0.preview.3",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=iw4UAgAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=iw4UAgAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
      },
      "language": "es",
      "previewLink": "http://books.google.com.ar/books?id=iw4UAgAAQBAJ&printsec=frontcover&dq=oliver+sacks&hl=&cd=2&source=gbs_api",
      "infoLink": "http://books.google.com.ar/books?id=iw4UAgAAQBAJ&dq=oliver+sacks&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Alucinaciones.html?hl=&id=iw4UAgAAQBAJ"
    },
    "saleInfo": {
      "country": "AR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "AR",
      "viewability": "PARTIAL",
      "embeddable": true,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.ar/books/download/Alucinaciones-sample-epub.acsm?id=iw4UAgAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "pdf": {
        "isAvailable": true,
        "acsTokenLink": "http://books.google.com.ar/books/download/Alucinaciones-sample-pdf.acsm?id=iw4UAgAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
      },
      "webReaderLink": "http://play.google.com/books/reader?id=iw4UAgAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "SAMPLE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Oliver Sacks vuelve a hacer gala de su singular talento como narrador, su sentido del humor y su inmensa cultura para plantear cuestiones que ponen en entredicho nuestra percepción del mundo y, muchas veces, nuestra propia identidad."
    }
  },
  {
    "kind": "books#volume",
    "id": "rdw0MQAACAAJ",
    "etag": "4iDM1pDAu0g",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/rdw0MQAACAAJ",
    "volumeInfo": {
      "title": "SPA-VEO UNA VOZ",
      "authors": [
        "Oliver Sacks"
      ],
      "publisher": "Anagrama",
      "publishedDate": "2017-04-30",
      "description": "In Seeing Voices, Oliver Sacks turns his attention to the subject of deafness, and the result is a deeply felt portrait of a minority struggling for recognition and respect-a minority with its own rich culture and unique visual language, an extraordinary mode of communication.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "8433978160"
        },
        {
          "type": "ISBN_13",
          "identifier": "9788433978165"
        }
      ],
      "readingModes": {
        "text": false,
        "image": false
      },
      "pageCount": 272,
      "printType": "BOOK",
      "categories": [
        "Health & Fitness"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=rdw0MQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=rdw0MQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      "language": "es",
      "previewLink": "http://books.google.com.ar/books?id=rdw0MQAACAAJ&dq=oliver+sacks&hl=&cd=3&source=gbs_api",
      "infoLink": "http://books.google.com.ar/books?id=rdw0MQAACAAJ&dq=oliver+sacks&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/SPA_VEO_UNA_VOZ.html?hl=&id=rdw0MQAACAAJ"
    },
    "saleInfo": {
      "country": "AR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "AR",
      "viewability": "NO_PAGES",
      "embeddable": false,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=rdw0MQAACAAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "NONE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Con su pasión y curiosidad habituales, Oliver Sacks se interna en el insondable silencio de los sordos profundos, de aquellos que han nacido sin uno de los sentidos básicos para el conocimiento, para la articulación del lenguaje y, por ..."
    }
  },
  {
    "kind": "books#volume",
    "id": "mNUHxwEACAAJ",
    "etag": "ytoZUa0vlbg",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/mNUHxwEACAAJ",
    "volumeInfo": {
      "title": "El Hombre Que Confundio a Su Mujer Con Un Sombrero",
      "authors": [
        "Oliver Sacks"
      ],
      "publisher": "Anagrama",
      "publishedDate": "2019-09-30",
      "description": "This extraordinary revelation of a book became an instant classic. Sacks narrates twenty case studies of patients lost in the strange world of neurological diseases, individuals who suffer from unprecedented problems with perception and who have lost much of their memory.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "8433902261"
        },
        {
          "type": "ISBN_13",
          "identifier": "9788433902269"
        }
      ],
      "readingModes": {
        "text": false,
        "image": false
      },
      "pageCount": 312,
      "printType": "BOOK",
      "categories": [
        "Fiction"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "panelizationSummary": {
        "containsEpubBubbles": false,
        "containsImageBubbles": false
      },
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=mNUHxwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=mNUHxwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      "language": "es",
      "previewLink": "http://books.google.com.ar/books?id=mNUHxwEACAAJ&dq=oliver+sacks&hl=&cd=4&source=gbs_api",
      "infoLink": "http://books.google.com.ar/books?id=mNUHxwEACAAJ&dq=oliver+sacks&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/El_Hombre_Que_Confundio_a_Su_Mujer_Con_U.html?hl=&id=mNUHxwEACAAJ"
    },
    "saleInfo": {
      "country": "AR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "AR",
      "viewability": "NO_PAGES",
      "embeddable": false,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=mNUHxwEACAAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "NONE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "Oliver Sacks solía celebrar su cumpleaños vestido con una camiseta en la que aparecía el elemento de la tabla periódica que correspondía a los años que cumplía."
    }
  },
  {
    "kind": "books#volume",
    "id": "254YjgEACAAJ",
    "etag": "187l2xFMOeo",
    "selfLink": "https://www.googleapis.com/books/v1/volumes/254YjgEACAAJ",
    "volumeInfo": {
      "title": "Musicofilia",
      "subtitle": "",
      "authors": [
        "Oliver W. Sacks"
      ],
      "publishedDate": "2016-03-31",
      "description": "With the same trademark compassion and erudition he brought to The Man Who Mistook His Wife for a Hat, Oliver Sacks explores the place music occupies in the brain and how it affects the human condition. Illuminating, inspiring, and utterly unforgettable, Musicophilia is Oliver Sacks' latest masterpiece.",
      "industryIdentifiers": [
        {
          "type": "ISBN_10",
          "identifier": "8433977881"
        },
        {
          "type": "ISBN_13",
          "identifier": "9788433977885"
        }
      ],
      "readingModes": {
        "text": false,
        "image": false
      },
      "pageCount": 464,
      "printType": "BOOK",
      "categories": [
        "Juvenile Nonfiction"
      ],
      "maturityRating": "NOT_MATURE",
      "allowAnonLogging": false,
      "contentVersion": "preview-1.0.0",
      "imageLinks": {
        "smallThumbnail": "http://books.google.com/books/content?id=254YjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
        "thumbnail": "http://books.google.com/books/content?id=254YjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
      },
      "language": "es",
      "previewLink": "http://books.google.com.ar/books?id=254YjgEACAAJ&dq=oliver+sacks&hl=&cd=5&source=gbs_api",
      "infoLink": "http://books.google.com.ar/books?id=254YjgEACAAJ&dq=oliver+sacks&hl=&source=gbs_api",
      "canonicalVolumeLink": "https://books.google.com/books/about/Musicofilia.html?hl=&id=254YjgEACAAJ"
    },
    "saleInfo": {
      "country": "AR",
      "saleability": "NOT_FOR_SALE",
      "isEbook": false
    },
    "accessInfo": {
      "country": "AR",
      "viewability": "NO_PAGES",
      "embeddable": false,
      "publicDomain": false,
      "textToSpeechPermission": "ALLOWED",
      "epub": {
        "isAvailable": false
      },
      "pdf": {
        "isAvailable": false
      },
      "webReaderLink": "http://play.google.com/books/reader?id=254YjgEACAAJ&hl=&printsec=frontcover&source=gbs_api",
      "accessViewStatus": "NONE",
      "quoteSharingAllowed": false
    },
    "searchInfo": {
      "textSnippet": "With the same trademark compassion and erudition he brought to The Man Who Mistook His Wife for a Hat, Oliver Sacks explores the place music occupies in the brain and how it affects the human condition."
    }
  }
]