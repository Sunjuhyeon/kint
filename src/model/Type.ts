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
}

// 컨텐츠_슬라이드
export type ConMainslide = {
    slideimg:Slideimage
    slidetxt:Slidetext
}
export type Slideimage = {
    img: string;
    link: string;
}
export type Slidetext = {
    title: string;
    contents: string;
}