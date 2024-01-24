import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "next/link";
const SubMenu = ({sub, anchorSub, handleCloseSub}) => {
  
  return (
    <Menu
              sx={{ mt: "45px", mx  : "0"}}
              id="menu-appbar"
              anchorEl={anchorSub}
              anchorOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center"
              }}
              open={anchorSub? true: false}
              onClose={handleCloseSub}
            >
              {sub.map((sub) => (
                <MenuItem key={sub.id} onClick={handleCloseSub}>
                  <Link  href = {'/news/' + sub.category}>{sub.category}</Link>
                </MenuItem>
              ))}
</Menu>
  )
}

export default SubMenu
