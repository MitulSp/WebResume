exports.mailAPI = async function mailAPI(mailinfo) {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sender@email_address.com",
        Password: "Enter your password",
        To: 'receiver@email_address.com',
        From: "sender@email_address.com",
        Subject: "Sending Email using javascript",
        Body: "Well that was easy!!"/* ,
        Attachments: [
            {
                name: "File_Name_with_Extension",
                path: "Full Path of the file"
            }] */
    })
        .then(function (message) {
            if (message == 'OK') {
                return message
            }
            else {
                return message
            }
        });
}