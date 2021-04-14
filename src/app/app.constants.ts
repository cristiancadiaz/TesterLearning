export const NAME_APP = 'Tester Learning';
export const author = 'Juan Pablo Hernandez';
export const version = 'Juan Pablo Hernandez';

export const TAGS = {
    EVENT: {
      ERR:{}
    },
    LABELS: {
      ERROR: 'ERROR',
      COMPLETE_REGISTER: 'REGISTRO COMPLETADO',
      BTN_MODULE: 'IR AL MODULO'
    }
};
export const SERVICES = {
    USERS : 'Users',
    CHAPTERS: 'Chapters',
    SECTIONS : 'Sections',
    ACTIVITIES : 'Activities'
};
export const ROUTES = {
    DASHBOARD : '/dashboard',
    CHAPTER: '/chapter',
    SECTION : '/section',
    ACTIVITY : '/activity'
};
export const ERR_AUTH =  [
  { CODE: 'auth/too-many-requests', MESSAGE: 'Ha excedido su numero de intentos, intentelo mas tarde'},
  { CODE: 'auth/user-not-found', MESSAGE: 'El usuario no se encuentra registrado'},
  { CODE: 'auth/wrong-password', MESSAGE: 'La contraseña es invalida'},
  { CODE: 'auth/email-already-in-use', MESSAGE: 'El correo diligenciado ya existe en nuestra base de datos'}
]
export const DNI_TYPES = [
  { value: 'CC', name: 'Cedula de Ciudadania' },
  { value: 'TI', name: 'Tarjeta de Identidad' },
  { value: 'CE', name: 'Cedula de Extrangeria' },
];

export const CONFIG_ALERT = {
  TYPE: {
    SUCCESS: 'success',
    WARNING: 'warning',
    INFO: 'info',
  },
  TIMERS:{
    FAST: 500,
    DEFAULT: 1500,
    SLOW: 2000
  }
};

export const ASSETS = {
  base: './assets/',
  IMAGES:{
    BASE:'images/',
    ICONS:'icons/'
  },
};
