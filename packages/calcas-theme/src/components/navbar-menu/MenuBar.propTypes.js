import PropTypes from "prop-types";

export const NavbarPropTypes = {
    items: PropTypes.array.isRequired
};
export const NavbarMenuDefaultProps = {
    items : []
};

export const MenuPropTypes = {
    menuItemList: PropTypes.object.isRequired,
    origin: PropTypes.object
};
export const MenuDefaultProps = {
    menuItemList: {},
    origin: { }
}

