const adminNavLinks = [
    {
        id: 1,
        text: 'foods',
        link: '/admin/foods',
        icon: 'fa fa-cutlery feather',
    },
    {
        id: 2,
        text: 'drinks',
        link: '/admin/drinks',
        icon: 'fa fa-glass feather',
    },
    {
        id: 3,
        text: 'deser',
        link: '/admin/deser',
        icon: 'fa fa-birthday-cake feather',
    },
    {
        id: 4,
        text: 'emails',
        link: '/admin/emails',
        icon: 'fa fa-list feather',
    },
];

const getAdminNavLinks = () => {
    return [...adminNavLinks];
};

export default getAdminNavLinks;
