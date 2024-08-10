import React from 'react';

const Footer = () => {
  return (
    <div className=' h-auto bg-gray-200 rounded-lg'>
      <div className='flex justify-around w-full pb-6 gap-8  pt-10'>
        <div className=''>
            <h1 className='font-extrabold pb-2'>ÜRÜNLER</h1>
            <p>Ayakkabı</p>
            <p>Giyim</p>
            <p>Aksesuar</p>
            <p>En Yeniler</p>
            <p>En Çok Satanlar</p>
        </div>
        <div>
            <h1 className='font-extrabold pb-2'>SPORLAR</h1>
            <p>Training</p>
            <p>Koşu</p>
            <p>Futbol</p>
            <p>Outdoor</p>
            <p>Basketbol</p>
        </div>
        <div>
            <h1 className='font-extrabold pb-2'>KOLEKSİYONLAR</h1>
            <p>Forum</p>
            <p>Ultraboost</p>
            <p>Stan Smith</p>
            <p>ZX</p>
            <p>Adicolor</p>
        </div>
        <div>
            <h1 className='font-extrabold pb-2'>ŞİRKET BİLGİLERİ</h1>
            <p>adiClub</p>
            <p>Hakkımızda</p>
            <p>Kariyer</p>
            <p>Basın</p>
        </div>
        <div>
            <h1 className='font-extrabold pb-2'>DESTEK</h1>
            <p>Müşteri Hizmetleri ve İletişim</p>
            <p>Mağaza Rehber</p>
            <p>Beden Tablosu</p>
            <p>Ödeme</p>
            <p>Teslimat</p>
        </div>
      </div>
      <div className='w-full h-[100px] bg-gray-600 flex justify-center items-center text-white'>
            <p className='mx-4'>Çerez Ayarları</p>
            <p className='mx-4'>Gizlilik Politikası</p>
            <p className='mx-4'>Şartlar ve Koşullar</p>
            <p className='mx-4'>© 2024 adidas Türkiye</p>
      </div>
    </div>
  );
}

export default Footer;
