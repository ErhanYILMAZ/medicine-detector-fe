<template>
    <div>
        <form id="img-upload-form" class="image-uploader-container">
            <input v-on:change="uploadImage()" name="img-upload" id="img-upload" class="image-uploader"  type="file" accept="image/*" capture="environment">
            <label class="image-button-label" for="img-upload">TAKE A PICTURE OF A MEDICINE</label>
            <img id="img-preview" class="image-preview" src="#" />
        </form>
    </div>
</template>
 
<script>
    export default {
        methods: {
            uploadImage: function () {
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
        }
    }
</script>
 
<style>
    .image-uploader-container {
        display: flex;
        flex-direction: column;
    }

    .image-uploader {
        width: 0.1px;
        height: 0.1px;
        opacity: 0;
        overflow: hidden;
        position: absolute;
        z-index: -1;
    }

    .image-uploader + label {
        font-size: 1.25em;
        font-weight: 700;
        color: white;
        background-color: black;
        display: inline-block;
    }

    .image-uploader:focus + label,
    .image-uploader + label:hover {
        background-color: red;
    }

    .image-preview,
    .image-button-label {
        width: fit-content;
        align-self: center;
    }
</style>
