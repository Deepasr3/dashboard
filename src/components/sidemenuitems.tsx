import home from "../assets/images/house-solid.svg"
import chart from "../assets/images/chart-column-solid.svg"
import calendar from "../assets/images/calendar-check-regular.svg"
import shopping from "../assets/images/bag-shopping-solid.svg"
import diary from "../assets/images/book-solid.svg"

export const Menuitems = [

    {
        menuTitle: "User Management",
        level: 1,
        icon: home,
        menuId: 'USER-MANAGEMENT',
    },
    {
        menuTitle: "View User",
        level: 1,
        icon: chart,
        menuId: 'VIEW-USER',
    },
    {
        menuTitle: "Work Group Rights",
        level: 1,
        icon: calendar,
        menuId: 'WORK-GROUP-RIGHTS',
    },
    {
        menuTitle: "Audit Log",
        level: 1,
        menuId: 'AUDIT-LOG',
        icon: diary,
    },
    {
        menuTitle: "Diary",
        level: 1,
        menuId: 'Diary',
        icon: shopping,
    },
];