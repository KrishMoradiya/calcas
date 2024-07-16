import PropTypes from 'prop-types';

export const NavbarPropTypes = {
    items: PropTypes.array.isRequired,
}
export const NavbarDefaultProps = {
    items: [],
}

export const NavbarSelectButtonPropTypes = {
    navItems: PropTypes.array.isRequired,
    handleMenuClick: PropTypes.func.isRequired,
}
export const NavbarSelectButtonDefaultProps = {
    navItems: [],
    handleMenuClick: ()=>{console.log("handleMenuClick called")},
}

export const CustomMenuItemPropTypes = {
    itemLabel: PropTypes.string.isRequired,
    handleClose: PropTypes.func.isRequired,
}
export const CustomMenuItemDefaultProps = {
    itemLabel: "Other",
    handleClose: ()=>{console.log("handleClose called")},
}

export const MenuButtonPropTypes = {
    buttonLabel: PropTypes.string.isRequired,
    onClick: PropTypes.func,
}
export const MenuButtonDefaultProps = {
    buttonLabel: "Click Here",
    onClick: ()=>{console.log("onCLick called")},
}

export const CustomMenuPropTypes = {
    anchorEl : PropTypes.bool,
    handleClose : PropTypes.func,
    navItem: PropTypes.object.isRequired
}
export const CustomMenuDefaultProps = {
    anchorEl : false,
    handleClose : ()=>{console.log("handleClose called")},
    navItem: {}
}

