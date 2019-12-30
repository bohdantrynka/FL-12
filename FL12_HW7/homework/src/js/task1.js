function task1 () {

    let email = prompt('enter your e-mail','');
    let password;
    let newPassword;
    let newPassword1;
    const minLength = 5;
    const newLength = 6;
    let change = 'Do you want to change your password'; 
    
        if ( email !== '' ) {
            if (email.length < minLength){
                alert('password is too short');
            }
        } else {
            alert('Canceled');
        }
            switch (email) {
                case 'user@gmail.com' :
                    password = prompt('Hello, User | password');
                    if (password !== 'UserPass') {
                        console.log('Wrong password');
                    } else {
                        confirm(change);
                        if (confirm('You shure to change the pass?')) {
                            password = prompt('Write the old password');
                            if (password !== 'UserPass'){
                                alert('wrong password');
                            } else {
                                newPassword = prompt('Write new password');
                                if ( newPassword !== '' && newPassword.length > newLength ) {
                                    if ( password !== newPassword ){
                                        newPassword1 = prompt('write it agein');
                                        if ( newPassword1 !== newPassword ){
                                            alert('something wrong');
                                        } else {
                                            alert('You have successfully changed your password');
                                        }
                                    } else {
                                        alert('You wrote the wrong password.');
                                    }
                                } else {
                                    alert('Canceled');
                                }
                            }
                        } else {
                            alert('You faild the change')
                        }
                    }
            break;
        case 'admin@gmail.com' :
            password = prompt('Hello, Admin | password');
                if (password !== 'AdminPass'){
                    console.log('Wrong password');
                } else {
                    confirm(change);
                    if (confirm('You shure to change the pass?')) {
                        password = prompt('Write the old password');
                        if (password !== 'AdminPass'){
                            alert('wrong password');
                        } else {
                            newPassword = prompt('Write new password');
                            if ( newPassword !== '' && newPassword.length > newLength ) {
                                if ( password !== newPassword ){
                                    newPassword1 = prompt('write it agein');
                                    if ( newPassword1 !== newPassword ){
                                        alert('something wrong');
                                    } else {
                                        alert('You have successfully changed your password');
                                    }
                                } else {
                                    alert('You wrote the wrong password.');
                                }
                            } else {
                                alert('Canceled');
                            }
                        }
                    } else {
                        alert('You faild the change')
                    }
                }
            break;
        default:
            console.log('I`v never heared about U');
            break; 
            }
    }