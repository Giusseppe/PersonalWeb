export interface TranslationResponse {
  header: Header;
  main: Main;
  footer: Footer;
}

export interface Footer {
  text: string;
}

export interface Header {
  me: string;
  cv: string;
  portafolio: string;
  dumbstuff: string;
  contact: string;
}

export interface Main {
  me: Me;
  cv: Cv;
  portafolio: Portafolio;
  dumbstuff: Dumbstuff;
  contact: Contact;
}

export interface Contact {
  name: string;
  email: string;
  message: string;
  "email-desc": string;
}

export interface Cv {
  education: Education;
  experience: Experience;
}

export interface Education {
  title: string;
  edu1: string;
  edu2: string;
}

export interface Experience {
  title: string;
  exp1: Exp;
  exp2: Exp;
  exp3: Exp;
  exp4: Exp;
}

export interface Exp {
  title: string;
  desc: string;
  year: string;
  duration: string;
}

export interface Dumbstuff {
}

export interface Me {
  title: string;
  "title-tooltip": string;
  desc: string;
  techs: string;
  download: string;
}

export interface Portafolio {
  seeMore: string;
  p1: P1;
  p2: P1;
  p3: P1;
}

export interface P1 {
  id: string;
  title: string;
  desc: string;
}
