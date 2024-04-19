import React, { ReactNode } from 'react';
import Chip from '@mui/joy/Chip';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import { NavLink } from 'react-router-dom';

interface ListItemProps {
  title: string;
  icon?: React.ComponentType<any>;
  notifications?: ReactNode;
  href?: string;
  to?: string;
  isActive?: boolean;
}

function ListItemComponent({ title, icon: Icon, notifications = '', to = '', isActive = false }: ListItemProps) {
  // const isLink = !!href || !!to;
  const hasNotifications = !!notifications;

  return (
    <ListItem>
      <ListItemButton
        role='menuitem'
        component={NavLink}
        to={to}
        className={isActive ? 'Active' : undefined}
      >
        {Icon && <Icon />}
        <ListItemContent>
          <Typography level="title-sm">{title}</Typography>
        </ListItemContent>
        {hasNotifications && (
          <Chip size="sm" color="primary" variant="solid">
            {notifications}
          </Chip>
        )}
      </ListItemButton>
    </ListItem>
  );
}

export default ListItemComponent;
