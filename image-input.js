function uploadImage() {
    const output = document.getElementById('img-preview');
    const uploadButton = document.getElementById('img-upload');
    const pic = document.getElementById('img-upload').files[0];
    const reader = new FileReader();
    reader.onloadend = function () { 
        output.src  = reader.result;
    } 
    if (pic) { 
        uploadButton.style.display = 'none';
        reader.readAsDataURL(pic);
    } else { 
        output.src = "#";
    } 
    //document.getElementById('img-upload-form').submit()
    console.log('uploaded')
}
