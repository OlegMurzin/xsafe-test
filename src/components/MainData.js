import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { InputMask } from 'primereact/inputmask';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import { Image } from 'primereact/image';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';

import '../primereact-theme/theme.css';                             //corporate design theme

//import "primereact/resources/themes/lara-light-blue/theme.css";     //old theme
import "primereact/resources/primereact.min.css";                   //core css
import "primeicons/primeicons.css";                                 //icons

import logo from '../../src/assets/dmt-logo.png';

//mode="decimal" min={0} max={1000} useGrouping={false} only numbers filter
// keyfilter="alpha" only letters filter
//<InputMask id="ip" mask="999.999.999.999" value={ip} placeholder="IP-Adresse" onChange={(e) => setIp1(e.value)}></InputMask>
//<InputMask id="ip" mask="999.999.999.999" value={mmid} placeholder="IP-Adresse" onChange={(e) => setMmid1(e.value)}></InputMask>
//<InputText value={logPath} placeholder="Platzhalter" onChange={(e) => setLogPath1(e.target.value)} />

const MainData = () => {
    const toast = useRef(null);
    const toastBC = useRef(null);

    const clear = (submit) => {
        toastBC.current.clear();
        submit && show();
    };

    const showSuccess = () => {
        toast.current.show({ severity: 'success', summary: 'Erfolgreich', detail: 'Alle Eingaben gespeichert', life: 3000 });
    };


    const show = () => {
        toast.current.show({ severity: 'success', summary: 'Erfolgreich', detail: 'Alle Eingaben entfernt' });
    };

    const confirm = () => {
        toastBC.current.show({
            severity: 'info',
            sticky: true,
            className: 'border-none',
            content: (
                <div className="" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Sind Sie sicher?</div>
                    </div>
                    <div className="flex justify-center gap-2">
                        <Button onClick={(e) => clear(true)} type="button" label="Bestätigen" className="p-button-success w-6rem" />
                        <Button onClick={(e) => clear(false)} type="button" label="Abbrechen" className="p-button-warning w-6rem" />
                    </div>
                </div>
            )
        });
    };

    const onBasicUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded with Basic Mode'});
    };

    //Server
    const [ip1, setIp1] = useState('');
    const [port1, setPort1] = useState('');
    const [dbms1, setDbms1] = useState('MYSQL');
    const [databasename1, setDatabasename1] = useState('');
    const [username1, setUsername1] = useState('');
    const [password1, setPassword1] = useState('');
    const [minConnections1, setMinConnections1] = useState('');
    const [maxConnections1, setMaxConnections1] = useState('');

    //Time
    const [bz_time1, setBz_time1] = useState('');
    const [overdue_time1, setOverdue_time1] = useState('');
    const [devicecheck_time1, setDevicecheck_time1] = useState('');
    const [updatecheck_time1, setUpdatecheck_time1] = useState('');
    const [shutdown_timeout1, setShutdown_timeout1] = useState('');
    const [initdevice_time1, setInitdevice_time1] = useState('');
    const [bz_count1, setBz_count1] = useState('');
    const [limit_usz1, setLimit_usz1] = useState('');

    //Messmanager
    const [mmid1, setMmid1] = useState('');

    //Logging
    const [logPath1, setLogPath1] = useState('');
    const [logEnabled1, setLogEnabled1] = useState('ProtokollierungON');
    const [logLevel1, setLogLevel1] = useState('Warnung');
    const [databaseLogEnabled1, setDatabaseLogEnabled1] = useState('ProtokollierungON');
    const [databaseLogLevel1, setDatabaseLogLevel1] = useState('Warnung');

    //Server fix
    const ip = "192.168.178.31"
    const port = 3306
    const dbms = "MYSQL"
    const databasename = "xsafe"
    const username = "root"
    const password = "dmt3m"
    const minConnections = 5
    const maxConnections = 32

    //Time fix
    const bz_time = 60000;
    const overdue_time = 5000;
    const devicecheck_time = 360;
    const updatecheck_time = 3600;
    const shutdown_timeout = 10000;
    const initdevice_time = 120;
    const bz_count = 2;
    const limit_usz = 10;

    //Messmanager fix
    const mmid = "127.0.0.1";

    //Logging fix
    const logPath = "./Messmanager.log";
    const logEnabled = 1;
    const logLevel = 4;
    const databaseLogEnabled = 1;
    const databaseLogLevel = 4;

    const dbms_ = [
        { name: 'MYSQL', code: 'MYSQL'},
    ];

    const logEnabled_ = [
        { name: 'Protokollierung aktiviert', code:'ProtokollierungON'},
        { name: 'Protokollierung deaktiviert', code:'ProtokollierungOFF'},
    ];

    const logLevel_ = [
        { name: 'Fehler', code:'Fehler'},
        { name: 'Warnung', code:'Warnung'},
        { name: 'Messverlauf', code:'Messverlauf'},
        { name: 'Informationsmeldungen', code:'Informationsmeldungen'},
    ];

    const dataBaseLogEnabled_ = [
        { name: 'Protokollierung aktiviert', code:'ProtokollierungON'},
        { name: 'Protokollierung deaktiviert', code:'ProtokollierungOFF'},
    ];

    const databaseLogLevel_ = [
        { name: 'Fehler', code:'Fehler'},
        { name: 'Warnung', code:'Warnung'},
        { name: 'Messverlauf', code:'Messverlauf'},
        { name: 'Informationsmeldungen', code:'Informationsmeldungen'},
    ];

    return (
        <div>
            <div className="pb-5 flex justify-center mt-5">
                <Image src={logo} alt="Image" width="150" />
            </div>

            <div className="text-center bg-dark-blue py-4">
                <h1 className="text-3xl text-white font-corpDes font-semibold">Konfiguration Messmanager</h1>
            </div>

            <div class="card">
                <div class="flex card-container indigo-container">
                    <div class="flex-1 h-4rem bg-darker-blue text-white font-corpDes font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4">Sektion Server</div>
                </div>

                <div class="flex card-container indigo-container mb-5">
                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>IP</h5>
                        <div className='mx-4'>
                            <InputText id="_ip" value={ip} placeholder="IP-Adresse" onValueChange={(e) => setIp1(e.value)} />
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">IP-Adresse des Daten- <br/>
                                    bankservers.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>Port</h5>
                        <div className='mx-4'>
                            <InputNumber inputId="_port" value={port} placeholder="Port" onValueChange={(e) => setPort1(e.value)} min={1} useGrouping={false} />
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Port des Datenbank- <br/>
                                    servers.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>DBMS</h5>
                        <div className="card flex justify-content-center">
                            <Dropdown value={dbms1} onChange={(e) => setDbms1(e.value)} options={dbms_} optionLabel="name" optionValue="code"
                                      placeholder="DBMS" className="w-full md:w-14rem mx-4"/>
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Datenbankmanagement- <br/>
                                    system.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>Datenbankname</h5>
                        <div className='mx-4'>
                            <InputText id="_datenbankname" value={databasename} placeholder="Datenbankname" onChange={(e) => setDatabasename1(e.target.value)}/>
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Name der Datenbank.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>Benutzername</h5>
                        <div className='mx-4'>
                            <InputText id="_benutzername" value={username} placeholder="Benutzername" onChange={(e) => setUsername1(e.target.value)} />
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Account-Benutzername <br />
                                    für Datenbank.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>Passwort</h5>
                        <div className='mx-4'>
                            <Password value={password}  placeholder="Passwort" onChange={(e) => setPassword1(e.target.value)} feedback={false} toggleMask/>
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Account-Passwort für <br />
                                    Datenbank.
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="flex card-container indigo-container">
                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>Min. Anzahl Verbindungen</h5>
                        <div className='mx-4'>
                            <InputNumber inputId="_minAnzahl" value={minConnections} placeholder="Min. Anzahl Verbindungen" onValueChange={(e) => setMinConnections1(e.value)} mode="decimal" min={0} max={1000} useGrouping={false} />
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Min. Anzahl vorgehaltener <br/>
                                    Verbindungen.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>Max. Anzahl Verbindungen</h5>
                        <div className='mx-4'>
                            <InputNumber inputId="_maxAnzahl" value={maxConnections} placeholder="Max. Anzahl Verbindungen" onValueChange={(e) => setMaxConnections1(e.value)} mode="decimal" min={0} max={1000} useGrouping={false} />
                        </div>
                        <div class="flex-1 text-darker-blue p-4">
                            <div class="verticalLine">
                                <div class="verticalLine-spacing">Max. Anzahl vorgehaltener <br/>
                                    Verbindungen.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex card-container indigo-container pt-5">
                <div class="flex-1 h-4rem bg-darker-blue text-white font-corpDes font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4 mt-4">Sektion Time</div>
            </div>

            <div class="flex card-container indigo-container mb-10">
                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>BZ_TIME</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                        <InputNumber inputId="_bzTime" value={bz_time} placeholder="BZ_TIME" onValueChange={(e) => setBz_time1(e.value)} mode="decimal" useGrouping={false} />
                        <span className="p-inputgroup-addon">ms</span>
                        </div>
                    </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Intervall zur Speicherung der <br/>
                                Betriebszustände.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>OVERDUE_TIME</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                        <InputNumber inputId="_overdueTime" value={overdue_time} placeholder="OVERDUE_TIME" onValueChange={(e) => setOverdue_time1(e.value)} mode="decimal" useGrouping={false} />
                            <span className="p-inputgroup-addon">ms</span>
                        </div>
                        </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Intervall zum erneuten Test des <br/>
                                Hardwarezustands nach besetz- <br/>
                                tem Messgerät.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>DEVICECHECK_TIME</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                        <InputNumber inputId="_devicecheckTime" value={devicecheck_time} placeholder="DEVICECHECK_TIME" onValueChange={(e) => setDevicecheck_time1(e.value)} mode="decimal" useGrouping={false} />
                            <span className="p-inputgroup-addon">s</span>
                        </div>
                        </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Intervall, in dem die Hardware- <br/>
                                zustandsprüfung stattfindet.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>UPDATECHECK_TIME</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                        <InputNumber inputId="_updatecheckTime" value={updatecheck_time} placeholder="UPDATECHECK_TIME" onValueChange={(e) => setUpdatecheck_time1(e.value)} mode="decimal" useGrouping={false} />
                            <span className="p-inputgroup-addon">s</span>
                        </div>
                        </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Intervall, in dem eine Prüfung <br/>
                                aus Aktualisierung der Konfi- <br/>
                                guration durchgeführt wird.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>SHUTDOWN_TIMEOUT</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                            <InputNumber inputId="_shutdownTimeout" value={shutdown_timeout} placeholder="SHUTDOWN_TIMEOUT"
                                         onValueChange={(e) => setShutdown_timeout1(e.value)} mode="decimal"
                                         useGrouping={false}/>
                            <span className="p-inputgroup-addon">ms</span>
                        </div>
                    </div>
                    <div className="flex-1 text-darker-blue p-4">
                        <div className="verticalLine">
                            <div className="verticalLine-spacing">
                                Zeitangabe, die der Messmanager <br/>
                                beim Beenden der Messthreads <br/>
                                warten soll, bevor er sich hart <br/>
                                terminiert.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex card-container indigo-container mb-10">
                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>INITDEVICE_TIME</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                            <InputNumber inputId="_initdeviceTime" value={initdevice_time} placeholder="INITDEVICE_TIME"
                                         onValueChange={(e) => setInitdevice_time1(e.value)} mode="decimal"
                                         useGrouping={false}/>
                            <span className="p-inputgroup-addon">s</span>
                        </div>
                    </div>
                    <div className="flex-1 text-darker-blue p-4">
                        <div className="verticalLine">
                            <div className="verticalLine-spacing">
                                Intervall zum Aufruf von <br/>
                                InitDevice.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

                <div className="flex card-container indigo-container pb-5">
                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>BZ_COUNT</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="_bzCount" value={bz_count} placeholder="BZ_COUNT"
                                     onValueChange={(e) => setBz_count1(e.value)} mode="decimal" useGrouping={false}/>
                    </div>
                </div>
                    <div className="flex-1 text-darker-blue p-4">
                        <div className="verticalLine">
                            <div className="verticalLine-spacing">
                                Mindestanzahl an BEDA-Messungen
                                für die Ermittlung von Betriebszustandsbedingungen vom Typ "Varianz des
                                BEDA-Wertes zwsichen parametrisierbaren Grenzen".
                            </div>
                        </div>
                    </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>LIMIT_USZ</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="_limitUsz" value={limit_usz} placeholder="LIMIT_USZ" onValueChange={(e) => setLimit_usz1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Gibt den Prozentualen Anteil der
                                Messwerte innerhalb der Vorlaufzeit an,
                                die bei Betriebszustandsbedingung
                                Steigung oder Abfallen als "Fehler" toleriert werden.
                            </div>
                        </div>
                    </div>

                </div>

            <div class="flex card-container indigo-container pb-3">
                <div class="flex-1 h-4rem bg-darker-blue text-white font-corpDes font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4 mt-4">Sektion Messmanager</div>
            </div>

            <div class="flex card-container indigo-container">
                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>MMID</h5>
                    <div className='mx-4'>
                        <InputText id="_mmid" value={mmid} placeholder="IP-Adresse" onValueChange={(e) => setMmid1(e.value)} />
                    </div>
                </div>
                <div class="flex-1 text-darker-blue p-4">
                    <div class="verticalLine">
                        <div class="verticalLine-spacing">
                            IP-Adresse des Rechners, auf dem der Messmanager läuft. <br/>
                            Über diesen Eintrag findet der Messmanager seine Messaufgaben in der Datenbank. <br/>
                            Daher ist darauf zu achten, dass in der Konfiguration des Messmanagers dieselbe IP-Adresse eingetragen ist.
                        </div>
                    </div>
                </div>

            </div>

            <div class="flex card-container indigo-container pt-5">
                <div class="flex-1 h-4rem bg-darker-blue text-white font-corpDes font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4 mt-4">Sektion Logging</div>
            </div>

            <div class="flex card-container indigo-container">
                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>LogPath</h5>
                    <div className='mx-4'>
                        <div className="card">
                            <Toast ref={toast}></Toast>
                            <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} chooseLabel="Pfad wählen"/>
                        </div>
                    </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Pfad für lokale Log- <br/>
                                dateien.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>LogEnabled</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={logEnabled1} onChange={(e) => setLogEnabled1(e.value)} options={logEnabled_} optionLabel="name"
                                  placeholder="Status auswählen" optionValue="code" className="w-full md:w-14rem mx-4"/>
                    </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Einschalter für Protokollierung.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>LogLevel</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={logLevel1} onChange={(e) => setLogLevel1(e.value)} options={logLevel_} optionLabel="name"
                                  placeholder="Status auswählen" optionValue="code" className="w-full md:w-14rem mx-4"/>
                    </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Detailgrad für Protokollierung.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>DatabaseLogEnabled</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={databaseLogEnabled1} onChange={(e) => setDatabaseLogEnabled1(e.value)} options={dataBaseLogEnabled_} optionLabel="name"
                                  placeholder="Status auswählen" optionValue="code" className="w-full md:w-14rem mx-4"/>
                    </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Einschalter für Protokollierung <br/>
                                in Datenbank.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-darker-blue font-corpDes font-bold p-4 border-round'>DatabaseLogLevel</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={databaseLogLevel1} onChange={(e) => setDatabaseLogLevel1(e.value)} options={databaseLogLevel_} optionLabel="name"
                                  placeholder="Status auswählen" optionValue="code" className="w-full md:w-14rem mx-4"/>
                    </div>
                    <div class="flex-1 text-darker-blue p-4">
                        <div class="verticalLine">
                            <div class="verticalLine-spacing">
                                Detailgrad für Protokollierung <br/>
                                in Datenbank.
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className='flex justify-end flex gap-2 mx-4 mt-12 pb-5'>
                <Toast ref={toast} />
                <Button onClick={showSuccess} label="Speichern" icon="pi pi-save" />
                <Toast ref={toastBC} position="bottom-center" />
                <Button onClick={confirm} label="Abbrechen" icon="pi pi-times" />
            </div>

        </div>

    );
};

export default MainData;
