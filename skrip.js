function dataPerson(){
    // Mengambil elemen form
    let forms = document.getElementById('frm');

    // Mengambil nilai dari input nama, pekerjaan, dan hobby
    let nama = forms.elements['nama'].value;
    let pekerjaan = forms.elements['pekerjaan'].value;
    let hobby = forms.elements['hobby'].value;

    // Menampilkan hasil pada elemen dengan id "hasil"
    let hasilElement = document.getElementById('hasil');
    hasilElement.innerHTML = `
        <h2>Hasil Input:</h2>
        <p>Nama: ${nama}</p>
        <p>Pekerjaan: ${pekerjaan}</p>
        <p>Hobby: ${hobby}</p>
    `;
}
