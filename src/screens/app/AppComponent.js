import React from "react";
import "./App.css"
import OldTableImage from '../../images/oldTable.png'
import AppImage from '../../images/app.png'

const AppComponent = ({
    setFullImage,
    showFullImage,
    onDownload
}) => {
    return (
        <div className="AppContainer">
            <div className="AppTitle TextCenter">
                CatLogs
            </div>
            <div className="AppText TextCenter">
                Все помнят форумные таблицы с рейтингом DPS?
            </div>
            <img onClick={() => setFullImage("image1")} className="OldTableImage" src={OldTableImage} />
            <div className="AppText TextCenter">
                Проверять скриншоты и следить за таблицей было слишком тяжело, потому мы выходим на новый уровень!

            </div>
            <div className="AppText TextCenter">
                Скачав данное приложение, логи с вашего клиента автоматически будут отправляться на сервер и заполняться в таблицу.
            </div>

            <img onClick={() => setFullImage("image2")} className="AppImage" src={AppImage} />
            <div className="AppText TextCenter">
                Для работы приложения:
            </div>
            <div className="AppText TextCenter">
                1) Скачайте и запустите!
            </div>
            <div className="AppText TextCenter">
                2) Зайдя в игру, обязательно пропишите <span className="Command">/combatlog</span>
            </div>
            <div className="AppText TextCenter">
                3) Можно идти в рейд!
            </div>

            <a href=" http://localhost:2424/download" download className="DownloadButton">
                Скачать
            </a>
            <div className="AppText TextCenter">
                Оставь свой след в истории сервера!
            </div>
            {
                showFullImage && (
                    <div className="FullImageBackground">

                    </div>
                )
            }
            {
                showFullImage && (
                    <img
                        className="FullImage"
                        src={showFullImage == "image1" ? OldTableImage : (showFullImage == "image2" ? AppImage : null)}
                    />
                )
            }
            {
                showFullImage && (
                    <div onClick={() => setFullImage(null)} className="FullImageContainer">

                    </div>
                )
            }
        </div>
    )
}

export default AppComponent