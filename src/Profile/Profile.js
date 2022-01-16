import React, { useState } from "react";
import "./Profile.css";

const Profile = () => {
  const [imgValue, setImgValue] = useState("/img/profile.svg");
  const [fileValue, setFileValue] = useState(
    "Unggah kartu identitas (KTP/KTM)"
  );

  const imgValueHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      console.log(reader.result);
      reader.readyState === 2 && setImgValue(reader.result);
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  const fileValueHandler = (e) => {
    e.target.value
      ? setFileValue(e.target.value)
      : setFileValue("Unggah kartu identitas (KTP/KTM)");
  };

  return (
    <div className="profile" id="profile">
      <h1 className="profile-title">Pengguna</h1>
      <div className="container">
        <div className="profile-card">
          <div className="row justify-content-between align-items-start">
            <div className="col-lg-2 col-md-3 col-sm-4">
              <form action="">
                <div className="form-item">
                  <img src={imgValue} alt="profile" className="img-holder" />
                  <input
                    type="file"
                    className="profile-input"
                    id="profile-input"
                    accept="image/*"
                    onChange={imgValueHandler}
                  />
                  <div className="profile-input-label">
                    <label htmlFor="profile-input">Ubah Foto</label>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-md-9 col-sm-8">
              <form action="">
                <div className="form-item">
                  <label htmlFor="name">Nama Lengkap</label>
                  <input
                    className="form-control"
                    type="text"
                    id="name"
                    name="name"
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="email">Email</label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                  />
                </div>

                <div className="form-item">
                  <label htmlFor="status">Status</label>
                  <select name="status" id="status">
                    <option defaultValue={`none`}>Pilih Status</option>
                    <option value="mahasiswa">Mahasiswa</option>
                    <option value="siswa">Siswa</option>
                    <option value="umum">Umum</option>
                  </select>
                </div>

                <div className="form-item">
                  <input
                    className="form-control"
                    type="text"
                    id="instansi"
                    name="instansi"
                    placeholder="Asal Instansi"
                  />
                </div>

                <div className="form-item">
                  <div className="form-item-file" data-text={fileValue}>
                    <input
                      className="form-control"
                      type="file"
                      id="instansi"
                      name="instansi"
                      onChange={fileValueHandler}
                    />
                  </div>
                </div>
                <div className="form-item">
                  <input
                    className="form-control"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Nomor WhatsApp"
                  />
                </div>

                <button type="submit" className="btn-submit">
                  Simpan Perubahan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
