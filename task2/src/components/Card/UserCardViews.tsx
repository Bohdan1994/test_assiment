import React from 'react';
import {UserInvited, UserTeammate} from "../../libs/User";
import {Invite, TeamMember} from "../../interfaces";
import styles from './style.module.scss';
import {ArrowIcon} from "../icons";
import {Label} from "./Label";

export type UserViewProp<DataType> = {
  data: DataType,
  onClick: Function
};

export const UserCardView = ({data, onClick}: UserViewProp<Invite>) => {
  const user = new UserInvited(data);

  return <div className={styles.card_description}>
    <span className={`${styles.description_title} grey`} role={'phone'}>{user.getPhoneNumber()}</span>
    <span className={styles.label_wrap}>
      <Label data={user.getStatus()} variant={'grey'}/>
    </span>
    <ArrowIcon className={styles.card_arrow} onClick={onClick}/>
  </div>
};

export const TeamMemberView = ({data, onClick}: UserViewProp<TeamMember>) => {
  const user = new UserTeammate(data);

  return <div className={styles.card_description}>
    <span className={styles.description_title} role={'name'}>{user.getFullName()}</span>
    <ArrowIcon className={styles.card_arrow} onClick={onClick}/>
  </div>
};