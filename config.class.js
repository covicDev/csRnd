class _Config {
    constructor(){
        /* 
            Mapy: 
            przez zastosowanie komentarza '//' albo
            przez wpisanie '0' w trzecią kolumnę,
            można wyłączyć z listy losowania.
        */
        this.mapsArray = [

            ["DUST II",     172,     1],
            ["INFERNO",     342,     1],
            ["MIRAGE",      512,     1],
            ["CACHE",       682,     1],
            ["COBBLE",      852,     1],
            ["OVERPASS",    1020,    1],
            ["TRAIN",       1188,    1],
            ["NUKE",        1358,    1],
            ["VERTIGO",     1528,    1],
            ["CANALS",      1698,    1],
            ["ITALY",       1868,    1],
            ["OFFICE",      2033,    1],
            ["ANUBIS",      2203,    1],
            ["DUST",        2373,    1],
            ["BANK",        2543,    1],
            ["LAKE",        2713,    1],
            ["S.HOUSE",     2881,    1],
            ["MILITIA",     3050,    1],
        //  ["NewMap",      numb,    1],

        ];
    }
    // get
    getMapsArray(){
        return this.mapsArray;
    }
}


