import React, { useEffect, useState } from "react";
import { setClass } from "../../modules/setClass";
import { ContactProps } from "./Contact.types";
import { Heading, Icon, Image, Paragraph, Textbox, Textarea, Button } from "da-awesome-library/build";
import img_owner from "../../../public/images/emp_owner.jpg"
import IconMail from "../../../public/svgs/mail.svg"
import IconPhone from "../../../public/svgs/phone.svg"
import IconCopyPaste from "../../../public/svgs/copypaste.svg"
import "./Contact.scss";

const Contact = ({theme, className}: ContactProps) => {

    const [contactData, setContactData] = useState({
        name: "",
        email: ""
    })

    useEffect(() => {
        document.title = "Contact Us - Hatching Wonders"
    }, [])

    return (
        <div className={setClass("hw_contact hw_route", [theme], className)}>
            <Heading content={"Contact Us!"} size={"teaser"} />
            <div className="hw_contact__person">
                <Heading className="hw_contact__heading" content={"Your Contact Person!"} size={"large"} />
                <div className="hw_contact__sidesplit">
                    <div className="hw_contact__persondetails">
                        <Image className="hw_contact__persondetailsimage" source={img_owner} />
                        <Paragraph className="hw_contact__persondetailstext" content={"Hey, I am Niklas! I own Hatching Wonders, and happily assist you on any inquiries and questions."} />
                    </div>
                    <div className="">
                        <div className="hw_contact__contactdetails">
                            <Icon ReactSVG={IconMail} />
                            <Paragraph content={"niklas@hatchingwonders.com"} />
                            <Icon ReactSVG={IconCopyPaste} />
                        </div>
                        <div className="hw_contact__contactdetails">
                            <Icon ReactSVG={IconPhone} />
                            <Paragraph content={"+49 175 3402872"} />
                            <Icon ReactSVG={IconCopyPaste} />
                        </div>
                    </div>
                </div>
            </div>
                <Heading content={"Write Us A Message!"} size={"large"} />
                <div className="hw_contact__form">
                    <Textbox value={""} placeholder={"Enter Your Name ..."} onChange={undefined} />
                    <Textbox value={""} placeholder={"Enter Your Email ..."} onChange={undefined} />
                    <Textarea value={""} placeholder={"Enter Your Message ..."} onChange={undefined} isDisabled={false} />
                    <Button onClick={undefined} content={"Send Your Message!"} />
                </div>
        </div>
    )
}

export default Contact
