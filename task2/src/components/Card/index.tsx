import React from "react";
import {Invite, TeamMember} from "../../interfaces";
import styles from './style.module.scss';
import {AdminIcon, UserIcon} from "../icons";
import {TeamMemberView, UserCardView} from "./UserCardViews";

type CardProps = {
  title: 'Administrators' | 'Standard Users',
  data: Array<TeamMember | Invite>
}

const Card = ({title, data}: CardProps) => {
  const handleClick = () => {
    console.log("I am not sure what an event listener it should be, let's do some magic!!!")
  }
  return <div className={styles.card_container}>
    <div className={styles.card_title}>
      {title === 'Administrators' ? <AdminIcon/> : <UserIcon/>}
      {title}
    </div>

    <div className={styles.card_wrap}>
      {data.map(user => {
        const teamMember = user as TeamMember;

        if (user.status === 'invited') {
          const invitedMember = user as Invite;
          return <UserCardView data={invitedMember} key={invitedMember.id} onClick={handleClick}/>
        }

        return <TeamMemberView data={teamMember} key={teamMember.id} onClick={handleClick}/>
      })}
    </div>
  </div>
};

export default Card;