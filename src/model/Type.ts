// 헤더_네비게이션
export type Head = {
    logo:string;
    home:string;
    navi:Navi[];
}
export type Navi = {
    title: string;
    link: string;
}

// 컨텐츠
export type Con = {
    mainslide:ConMainslide[];
    new:ConNew[];
    best:Detail[];
    thema:ConThema;
    event:ConEvent[];
    review:ConReview[];
}

// 컨텐츠_슬라이드
export type ConMainslide = {
    slideimg:Slideimage;
    slidetxt:Slidetext;
}
export type Slideimage = {
    img: string;
    link: string;
}
export type Slidetext = {
    title: string;
    contents: string;
}

// 컨텐츠_new
export type ConNew = {
    thumb:string;
    detail:Detail;
}
export type Detail = {
    src:string;
    category?: string;
    title: string;
    price: number;
    discount?: number;
    rank? : string;
}

// 컨텐츠_테마
export type ConThema = {
    themalist : ThemaTitle[];
    list : ThemaList;
}
export type ThemaTitle = {
    title : string;
    name : string;
}
export type ThemaList = {
    orbit : ThemaDetail;
    moment : ThemaDetail;
    love : ThemaDetail;
    flower : ThemaDetail;
}
export type ThemaDetail = {
    banner : string;
    detail : Detail[];
}

//컨텐츠_이벤트
export type ConEvent = {
    src:string;
    subtitle:string;
    title:string;
    button:string;
}

//컨텐츠_리뷰
export type ConReview = {
    backgroundcls:string;
    src:string;
    title:string;
    content:string;
}