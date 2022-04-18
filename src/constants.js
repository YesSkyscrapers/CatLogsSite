export const BOSSES = {
    "rhyolith": "rhyolith",
    "bethtilac": "bethtilac",
    "shannox": "shannox"
}

export const BOSSES_OPTIONS = [
    { value: "rhyolith", label: "Риолит" },
    { value: "bethtilac", label: "Бет'тилак" },
    { value: "shannox", label: "Шэннокс" }
]


export const DIFFICULTY_OPTIONS = [
    { value: "10n", label: "10об" },
    { value: "25n", label: "25об" },
    { value: "10h", label: "10гер" },
    { value: "25h", label: "25гер" }
]


export const CLASSES_OPTIONS = [
    { value: "druidCat", label: "Кот" },
    { value: "druidBear", label: "Мишка" },
    { value: "druidBalance", label: "Сова" },
    { value: "druidRestoration", label: "Рдру" }
]


export const CLASSES = [{
    id: 0,
    key: "shp",
    color: '#ffffff',
    value: "shp",
    label: "ШП",
    spells: ["Прикосновение вампира"]

},
{
    id: 1,
    key: "dc",
    color: '#ffffff',
    value: "dc",
    label: "ДЦ",
    spells: ["Священный огонь"]

},
{
    id: 2,
    key: "hpriest",
    color: '#ffffff',
    value: "hpriest",
    label: "ХПрист",
    spells: ["Слово силы"]

},
{
    id: 3,
    key: "bear",
    color: '#ff7d0a',
    value: "bear",
    label: "Медведь",
    spells: ["Смять"]

},
{
    id: 4,
    key: "cat",
    color: '#ff7d0a',
    value: "cat",
    label: "Кот",
    spells: ["Свирепый укус"]

},
{
    id: 5,
    key: "balance",
    color: '#ff7d0a',
    value: "balance",
    label: "Сова",
    spells: ["Звездный поток"]

},
{
    id: 6,
    key: "rdru",
    color: '#ff7d0a',
    value: "rdru",
    label: "Рдру",
    spells: ["Лунный огонь"]

},
{
    id: 7,
    key: "aflic",
    color: '#9482c9',
    value: "aflic",
    label: "Афлик",
    spells: ["Блуждающий дух"]

},
{
    id: 8,
    key: "demon",
    color: '#9482c9',
    value: "demon",
    label: "Демон",
    spells: ["Рука Гулдана"]

},
{
    id: 9,
    key: "destro",
    color: '#9482c9',
    value: "destro",
    label: "Дестрик",
    spells: ["Поджигание"]

},
{
    id: 10,
    key: "combat",
    color: '#fff569',
    value: "combat",
    label: "КРога",
    spells: ["Пробивающий удар"]

},
{
    id: 11,
    key: "liqid",
    color: '#fff569',
    value: "liqid",
    label: "Мутик",
    spells: ["Расправа"]

},
{
    id: 12,
    key: "shadow",
    color: '#fff569',
    value: "shadow",
    label: "ШдРога",
    spells: ["Кровоизлияние"]

},
{
    id: 13,
    key: "elem",
    color: '#2459ff',
    value: "elem",
    label: "Элем",
    spells: ["Вскипание лавы"]

},
{
    id: 14,
    key: "ench",
    color: '#2459ff',
    value: "ench",
    label: "Энх",
    spells: ["Удар бури"]

},
{
    id: 15,
    key: "rsham",
    color: '#2459ff',
    value: "rsham",
    label: "Ршам",
    spells: ["Огненный шок"]

},
{
    id: 16,
    key: "arms",
    color: '#c79c6e',
    value: "arms",
    label: "Армс",
    spells: ["Смертельный удар"]

},
{
    id: 17,
    key: "fury",
    color: '#c79c6e',
    value: "fury",
    label: "Фурик",
    spells: ["Кровожадность"]

},
{
    id: 18,
    key: "protwar",
    color: '#c79c6e',
    value: "protwar",
    label: "Пвар",
    spells: ["Удар щитом"]

},
{
    id: 19,
    key: "frostdk",
    color: '#c41f3b',
    value: "frostdk",
    label: "Фдк",
    spells: ["Уничтожение"]

},
{
    id: 20,
    key: "unholydk",
    color: '#c41f3b',
    value: "unholydk",
    label: "Адк",
    spells: ["Удар разложения"]

},
{
    id: 21,
    key: "blooddk",
    color: '#c41f3b',
    value: "blooddk",
    label: "Бдк",
    spells: ["Удар смерти"]

},
{
    id: 22,
    key: "rpal",
    color: '#f58cba',
    value: "rpal",
    label: "Ретрик",
    spells: ["Вердикт храмовника"]

},
{
    id: 23,
    key: "ppal",
    color: '#f58cba',
    value: "ppal",
    label: "ППал",
    spells: ["Щит мстителя"]

},
{
    id: 24,
    key: "hpal",
    color: '#f58cba',
    value: "hpal",
    label: "ХПал",
    spells: ["Правосудие"]

},
{
    id: 25,
    key: "bm",
    color: '#abd473',
    value: "bm",
    label: "БМ",
    spells: ["Команда", "Взять"]

},
{
    id: 26,
    key: "mm",
    color: '#abd473',
    value: "mm",
    label: "ММ",
    spells: ["Прицельный выстрел"]

},
{
    id: 27,
    key: "surv",
    color: '#abd473',
    value: "surv",
    label: "Сурв",
    spells: ["Выстрел кобры"]

},
{
    id: 28,
    key: "frostmage",
    color: '#69ccf0',
    value: "frostmage",
    label: "ФростМаг",
    spells: ["Ледяная стрела"]

},
{
    id: 29,
    key: "firemage",
    color: '#69ccf0',
    value: "firemage",
    label: "ФайрМаг",
    spells: ["Возгорание"]

},
{
    id: 30,
    key: "arcanemage",
    color: '#69ccf0',
    value: "arcanemage",
    label: "АрканМаг",
    spells: ["Чародейская вспышка"]
},
{
    id: -1,
    key: "UNKNOWN",
    color: '#555',
    value: "UNKNOWN",
    label: "Не определено",
    spells: []
}]


export const SPELLSCHOOL_UNKNOWN = 0
export const SPELLSCHOOL_PHYSICAL = 1
export const SPELLSCHOOL_HOLY = 2
export const SPELLSCHOOL_FIRE = 4
export const SPELLSCHOOL_NATURE = 8
export const SPELLSCHOOL_NATUREFIRE = SPELLSCHOOL_FIRE + SPELLSCHOOL_NATURE
export const SPELLSCHOOL_FROST = 16
export const SPELLSCHOOL_FROSTFIRE = SPELLSCHOOL_FIRE + SPELLSCHOOL_FROST
export const SPELLSCHOOL_SHADOW = 32
export const SPELLSCHOOL_ARCANE = 64

export const SPELLSCHOOLS = {
    [SPELLSCHOOL_UNKNOWN]: '#555',
    [SPELLSCHOOL_PHYSICAL]: '#e5cc80',
    [SPELLSCHOOL_HOLY]: '#ffff8f',
    [SPELLSCHOOL_FIRE]: '#eb4561',
    [SPELLSCHOOL_NATURE]: '#d1fa99',
    [SPELLSCHOOL_NATUREFIRE]: '#4A80ff',
    [SPELLSCHOOL_FROST]: '#4A80ff',
    [SPELLSCHOOL_FROSTFIRE]: '#d1fa99',
    [SPELLSCHOOL_SHADOW]: '#B8A8F0',
    [SPELLSCHOOL_ARCANE]: '#8ff2ff'
}
