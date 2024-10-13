import { classNames } from "shared/lib/classNames/classNames";
import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(classes.navbar, {}, [className])}>
      <div className={classes.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/"} className={classes.mainLink}>Главная</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
