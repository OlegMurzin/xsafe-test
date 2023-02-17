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
import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

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
                <div className="flex flex-column align-items-center" style={{ flex: '1' }}>
                    <div className="text-center">
                        <i className="pi pi-exclamation-triangle" style={{ fontSize: '3rem' }}></i>
                        <div className="font-bold text-xl my-3">Sind Sie sicher?</div>
                    </div>
                    <div className="flex gap-2">
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
    const [delay_time1, setDelay_time1] = useState('');
    const [devicecheck_time1, setDevicecheck_time1] = useState('');
    const [updatecheck_time1, setUpdatecheck_time1] = useState('');
    const [bz_count1, setBz_count1] = useState('');
    const [beda_overdue_factor1, setBeda_overdue_factor1] = useState('');
    const [limit_usz1, setLimit_usz1] = useState('');
    const [shutdown_timeout1, setShutdown_timeout1] = useState('');
    const [initdevice_time1, setInitdevice_time1] = useState('');

    //Messmanager
    const [mmid1, setMmid1] = useState('');

    //Logging
    const [logPath1, setLogPath1] = useState('');
    const [logEnabled1, setLogEnabled1] = useState('');
    const [logLevel1, setLogLevel1] = useState('');
    const [databaseLogEnabled1, setDatabaseLogEnabled1] = useState('');
    const [databaseLogLevel1, setDatabaseLogLevel1] = useState('');
    const [log_output1, setLog_output1] = useState('');

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
    const delay_time = 0;
    const devicecheck_time = 360;
    const updatecheck_time = 3600;
    const bz_count = 2;
    const beda_overdue_factor = 6.66;
    const limit_usz = 10;
    const shutdown_timeout = 10000;
    const initdevice_time = 120;

    //Messmanager fix
    const mmid = "127.0.0.1";

    //Logging fix
    const logPath = "./Messmanager.log";
    const logEnabled = 1;
    const logLevel = 4;
    const databaseLogEnabled = 1;
    const databaseLogLevel = 4;
    const log_output = 0;

    const dbms_ = [
        { name: 'MYSQL', code: 'MYSQL'},
    ];

    const logEnabled_ = [
        { name: 'Protokollierung aktiviert'},
        { name: 'Protokollierung deaktiviert'},
    ];

    const logLevel_ = [
        { name: 'Fehler'},
        { name: 'Warnung'},
        { name: 'Messverlauf'},
        { name: 'Informationsmeldungen'},
    ];

    const dataBaseLogEnabled_ = [
        { name: 'Protokollierung aktiviert'},
        { name: 'Protokollierung deaktiviert'},
    ];

    const databaseLogLevel_ = [
        { name: 'Fehler'},
        { name: 'Warnung'},
        { name: 'Messverlauf'},
        { name: 'Informationsmeldungen'},
    ];

    return (
        <div>
            <div className="pb-5 flex justify-center mt-5">
                <Image src={logo} alt="Image" width="150" />
            </div>

            <div className="text-center bg-dark-blue py-4 text-white">
                <h1 className="text-3xl font-semibold">Konfiguration Messmanager</h1>
            </div>

            <div class="card">
                <div class="flex card-container indigo-container">
                    <div class="flex-1 h-4rem bg-darker-blue text-white font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4">Sektion Server</div>
                </div>
                <div class="flex card-container indigo-container mb-5">
                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>IP</h5>
                        <div className='mx-4'>
                            <InputText id="ip" value={ip} placeholder="IP-Adresse" onValueChange={(e) => setIp1(e.value)} />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">IP-Adresse des Datenbank- <br />
                                    servers.</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>Port</h5>
                        <div className='mx-4'>
                            <InputNumber inputId="minmax" value={port} placeholder="Port" onValueChange={(e) => setPort1(e.value)} min={1} useGrouping={false} />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Port des Datenbankservers.</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>DBMS</h5>
                        <div className="card flex justify-content-center">
                            <Dropdown value={dbms1} onChange={(e) => setDbms1(e.value)} options={dbms_} optionLabel="name" optionValue="code"
                                      placeholder="DBMS auswählen" className="w-full md:w-14rem mx-4" />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Datenbankmanagement- <br/>
                                    system.</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>Datenbankname</h5>
                        <div className='mx-4'>
                            <InputText id="alpha" value={databasename} placeholder="Datenbankname" onChange={(e) => setDatabasename1(e.target.value)}/>
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Name der Datenbank.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>Benutzername</h5>
                        <div className='mx-4'>
                            <InputText value={username} placeholder="Benutzername" onChange={(e) => setUsername1(e.target.value)} />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Account-Benutzername für <br />
                                    Datenbank.</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>Passwort</h5>
                        <div className='mx-4'>
                            <Password value={password} onChange={(e) => setPassword1(e.target.value)} feedback={false} />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Account-Passwort für  <br />
                                    Datenbank.</div>
                            </div>
                        </div>
                    </div>


                </div>
                <div class="flex card-container indigo-container">
                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>Min. Anzahl Verbindungen</h5>
                        <div className='mx-4'>
                            <InputNumber inputId="minmax" value={minConnections} placeholder="min. vorg. Verbindungen" onValueChange={(e) => setMinConnections1(e.value)} mode="decimal" min={0} max={1000} useGrouping={false} />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Min. Anzahl vorgehaltener <br />
                                    Verbindungen.</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>Max. Anzahl Verbindungen</h5>
                        <div className='mx-4'>
                            <InputNumber inputId="minmax" value={maxConnections} placeholder="max. vorg. Verbindungen" onValueChange={(e) => setMaxConnections1(e.value)} mode="decimal" min={0} max={1000} useGrouping={false} />
                        </div>
                        <div class="flex-1 text-black p-4">
                            <div class="local">
                                <div class="p">Max. Anzahl vorgehaltener  <br />
                                    Verbindungen.</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="flex card-container indigo-container pt-5">
                <div class="flex-1 h-4rem bg-darker-blue text-white font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4 mt-4">Sektion Time</div>
            </div>
            <div class="flex card-container indigo-container mb-20">
                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>BZ_TIME [ms]</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="bz_time" value={bz_time} placeholder="Platzhalter" onValueChange={(e) => setBz_time1(e.value)} mode="decimal" suffix=" ms" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Intervall zur Speicherung <br/>
                                der Betriebszustände.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>OVERDUE_TIME [ms]</h5>
                    <div className='mx-4'>
            <span className="p-input-icon-right">
             <i className="">ms</i>
            <InputNumber inputId="minmax" value={overdue_time} placeholder="Platzhalter" onValueChange={(e) => setOverdue_time1(e.value)} mode="decimal" useGrouping={false} />
            </span>
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Intervall zum erneuten <br/> Test des Hardware- <br/> zustands nach besetz- <br/> tem Messgerät.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>DELAY_TIME</h5>
                    <div className='mx-4'>
                        <div className="p-inputgroup">
                            <InputNumber inputId="minmax" value={delay_time} placeholder="Platzhalter" onValueChange={(e) => setDelay_time1(e.value)} mode="decimal" useGrouping={false} />
                            <span className="p-inputgroup-addon">ms</span>
                        </div>
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Platzhalter.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>DEVICECHECK_TIME</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={devicecheck_time} placeholder="Platzhalter" onValueChange={(e) => setDevicecheck_time1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Intervall, in dem die Hard- <br/>
                                warezustandsprüfung stattfindet.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>UPDATECHECK_TIME [s]</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={updatecheck_time} placeholder="Platzhalter" onValueChange={(e) => setUpdatecheck_time1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Intervall, in dem eine Prüf- <br/>
                                ung aus Aktualisierung der <br/>
                                Konfiguration durchgeführt wird.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>BZ_COUNT</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={bz_count} placeholder="Platzhalter" onValueChange={(e) => setBz_count1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Mindestanzahl an BEDA- <br/> Messungen für die Ermit- <br/> tlung von Betriebs- <br/> zustandsbedingungen vom <br/> Typ "Varianz des BEDA-Wertes zwsichen parametrisierbaren <br/> Grenzen".
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <div class="flex card-container indigo-container">
                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>BEDA_OVERDUE_FACTOR</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={beda_overdue_factor} placeholder="Platzhalter" onValueChange={(e) => setBeda_overdue_factor1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Platzhalter.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>LIMIT_USZ</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={limit_usz} placeholder="Platzhalter" onValueChange={(e) => setLimit_usz1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Platzhalter.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>SHUTDOWN_TIMEOUT[ms]</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={shutdown_timeout} placeholder="Platzhalter" onValueChange={(e) => setShutdown_timeout1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Zeitangabe, die der Mess- <br />
                                manager beim Beenden der <br/>
                                Messthreads warten soll, <br />
                                bevor er sich hart terminiert.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>INITDEVICE_TIME [s]</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={initdevice_time} placeholder="Platzhalter" onValueChange={(e) => setInitdevice_time1(e.value)} mode="decimal" useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Intervall zum Aufruf von <br/>
                                InitDevice.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex card-container indigo-container pt-14">
                <div class="flex-1 h-4rem bg-darker-blue text-white font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4 mt-4">Sektion Messmanager</div>
            </div>
            <div class="flex card-container indigo-container">
                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>MMID</h5>
                    <div className='mx-4'>
                        <InputText id="ip" value={mmid} placeholder="IP-Adresse" onValueChange={(e) => setMmid1(e.value)} />
                    </div>
                </div>
                <div class="flex-1 text-black p-4">
                    <div class="local">
                        <div class="p">
                            IP-Adresse des Rechners, auf dem der Messmanager läuft.<br />
                            Über diesen Eintrag findet der Messmanager seine Messaufgaben in der Datenbank. <br />
                            Daher ist darauf zu achten, dass in der Konfiguration des Messmanagers dieselbe IP-Adresse eingetragen ist.
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex card-container indigo-container pt-5">
                <div class="flex-1 h-4rem bg-darker-blue text-white font-bold text-center p-2 border-solid border-2 border-dark-blue mx-4 mt-4">Sektion Logging</div>
            </div>
            <div class="flex card-container indigo-container">
                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>LogPath</h5>
                    <div className='mx-4'>
                        <div className="card">
                            <Toast ref={toast}></Toast>
                            <FileUpload mode="basic" name="demo[]" url="https://primefaces.org/primereact/showcase/upload.php" accept="image/*" maxFileSize={1000000} onUpload={onBasicUpload} chooseLabel="Pfad wählen"/>
                        </div>
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Pfad für lokale Log- <br/> dateien.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>LogEnabled</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={logEnabled1} onChange={(e) => setLogEnabled1(e.value)} options={logEnabled_} optionLabel="name"
                                  placeholder="Status auswählen" className="w-full md:w-14rem mx-4" />
                    </div>

                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Einschalter für Protokollierung.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>LogLevel</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={logLevel1} onChange={(e) => setLogLevel1(e.value)} options={logLevel_} optionLabel="name"
                                  placeholder="Status auswählen" className="w-full md:w-14rem mx-4" />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Detailgrad für Protokollierung.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>DatabaseLogEnabled</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={databaseLogEnabled1} onChange={(e) => setDatabaseLogEnabled1(e.value)} options={dataBaseLogEnabled_} optionLabel="name"
                                  placeholder="Status auswählen" className="w-full md:w-14rem mx-4" />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Einschalter für Protokollierung <br />
                                in Datenbank.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>DatabaseLogLevel</h5>
                    <div className="card flex justify-content-center">
                        <Dropdown value={databaseLogLevel1} onChange={(e) => setDatabaseLogLevel1(e.value)} options={databaseLogLevel_} optionLabel="name"
                                  placeholder="Status auswählen" className="w-full md:w-14rem mx-4" />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Detailgrad für Protokollierung <br />
                                in Datenbank.
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h5 className='flex-1 h-4rem text-black font-bold p-4 border-round'>LogOutput</h5>
                    <div className='mx-4'>
                        <InputNumber inputId="minmax" value={log_output} placeholder="Platzhalter" onValueChange={(e) => setLog_output1(e.value)} mode="decimal"  useGrouping={false} />
                    </div>
                    <div class="flex-1 text-black p-4">
                        <div class="local">
                            <div class="p">
                                Platzhalter.
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
