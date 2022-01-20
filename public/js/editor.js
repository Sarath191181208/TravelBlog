let img = document.querySelector('.img');
let btn = document.querySelector('#banner-upload');

btn.addEventListener('change', () => {
    uploadImage(btn, 'image');
});

const uploadImage = (btn, name) => {
    const [file] = btn.files;
    if (file && file.type.includes("image")) {
        const formdata = new FormData();
        formdata.append("image", file);
        let path_img = fetch('/upload', {
            method: 'post',
            body: formdata
        }).then(res => res.json())
            .then(data => { return data; });
        path_img.then(data => {
            console.log("data", data)
            imgPath = `${location.origin}/${data}`;
            img.style.backgroundImage = `url(${imgPath})`
            // img.style.width = 
        });
    }
};