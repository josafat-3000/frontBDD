import React, { useState } from 'react';
import correctAnswers from './resp4.json';

function Quiz() {
    const [answers, setAnswers] = useState({
        homogeneidad_respuesta: '',
        autonomia_local_respuesta: '',
        independencia_sitio_central_respuesta: '',
        operacion_continua_respuesta: '',
        independencia_ubicacion_respuesta: '',
        independencia_fragmentacion_respuesta: '',
        independencia_replicacion_respuesta: '',
        consultas_distribuidas_respuesta: '',
        transacciones_distribuidas_respuesta: '',
        independencia_hardware_respuesta: '',
        independencia_sistema_operativo_respuesta: '',
        independencia_red_respuesta: '',
        independencia_dbms_respuesta: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAnswers({
            ...answers,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault(); // Evita que se recargue la página al enviar el formulario

        // Convierte las respuestas a JSON
        const answersJSON = JSON.stringify(answers);
        console.log(answersJSON); // Puedes enviar o manipular este JSON según tus necesidades

        // Aquí podrías enviar las respuestas a un servidor, almacenarlas localmente, etc.

        // Opcional: Reiniciar el estado de las respuestas después del envío
        setAnswers({
            homogeneidad_respuesta: '',
            autonomia_local_respuesta: '',
            independencia_sitio_central_respuesta: '',
            operacion_continua_respuesta: '',
            independencia_ubicacion_respuesta: '',
            independencia_fragmentacion_respuesta: '',
            independencia_replicacion_respuesta: '',
            consultas_distribuidas_respuesta: '',
            transacciones_distribuidas_respuesta: '',
            independencia_hardware_respuesta: '',
            independencia_sistema_operativo_respuesta: '',
            independencia_red_respuesta: '',
            independencia_dbms_respuesta: '',
        });
    };

    const checkAnswer = (question) => {
        return answers[question] === correctAnswers[question] ? 'Correcto' : 'Incorrecto';
    };

    return (
        <div className="quiz">
            <h1>Homogeneidad en MYSQL</h1>
            <p>
                En un sistema de gestión de bases de datos relacional como MySQL, la homogeneidad se refiere a la consistencia en la estructura de las tablas y la forma en
                que se almacenan y manipulan los datos. En MySQL, las bases de datos se organizan en tablas, cada una de las cuales tiene una estructura definida por un
                conjunto de columnas y un conjunto de filas. Cada columna tiene un nombre y un tipo de dato específico que define el tipo de información que puede almacenar.
            </p>
            <p>
                La homogeneidad en MySQL se refleja en que todas las filas de una tabla tienen la misma estructura, es decir, contienen el mismo número de columnas y
                cada columna tiene el mismo tipo de dato en todas las filas. Esto asegura que los datos estén organizados de manera consistente y facilita la consulta y
                manipulación de los datos.
            </p>
            <p>
                MySQL también ofrece cierta flexibilidad en términos de cómo se pueden definir las tablas y cómo se pueden almacenar los datos. Por ejemplo, MySQL permite la
                definición de columnas opcionales que pueden estar presentes o ausentes en cada fila, lo que puede introducir cierta variabilidad en la estructura de las
                tablas. Además, MySQL ofrece varios motores de almacenamiento que pueden tener diferentes características y comportamientos, lo que puede afectar la
                homogeneidad en términos de rendimiento y funcionalidad.
            </p>


            <h2>Objetivos de distribución de datos</h2>
            <h3>1. Autonomía local</h3>
            <p>
                MySQL en su forma estándar no ofrece una autonomía local en una base de datos distribuida. MySQL es un sistema de gestión de base de datos relacional (RDBMS)
                que generalmente se ejecuta con un solo servidor. Sin embargo, existen configuraciones que permiten cierto grado de distribución y autonomía local utilizando
                MySQL.
            </p>
            <p>
                Una forma de lograr cierto grado de distribución es mediante la replicación de MySQL, lo que permite tener copias idénticas de una base de datos en múltiples
                servidores. Puede proporcionar redundancia y cierto grado de tolerancia a fallos. Sin embargo, la replicación del gestor generalmente sigue un modelo
                maestro-esclavo donde las escrituras se realizan en un único servidor. Esto significa que la autonomía puede ser limitada, ya que todas las escrituras
                deben realizarse en el servidor maestro.
            </p>
            <p>
                Otra opción es utilizar tecnologías de almacenamiento distribuido en combinación con el gestor. Sin embargo, requiere configuraciones y herramientas adicionales
                para integrar MySQL con sistemas de almacenamiento (Hadoop o HDFS).
            </p>

            <h3>2. Independencia de sitio central</h3>
            <p>
                MySQL está diseñado para funcionar en un único servidor, sin embargo, existen estrategias para poder utilizarlo con un grado de independencia del sitio central
                en un entorno distribuido; se pueden hacer las siguientes consideraciones:
            </p>
            <div>
                <ul>
                    <li>
                        Replicación. Sucede lo mismo de la autonomía local. MySQL ofrece la capacidad de replicar datos desde un servidor maestro a uno o más esclavos. Esto permite
                        que los servidores esclavos actúen de forma autónoma para leer consultas, y por lo tanto, proporcionar cierta independencia en el sitio central para
                        operaciones de lectura. Sin embargo, las operaciones de escritura aún deben dirigirse al servidor maestro.
                    </li>
                    <li>
                        Partición horizontal (shard). Los datos se dividen en fragmentos que se distribuyen en diferentes servidores. Cada fragmento puede estar ubicado físicamente
                        en un sitio diferente, proporcionando cierta independencia del sitio central en términos de almacenamiento de datos. Sin embargo, puede requerir una lógica de
                        aplicación más compleja para dirigir las consultas a los servidores correctos.
                    </li>
                    <li>
                        Federación. MySQL puede acceder a datos distribuidos en diferentes servidores como si estuvieran en una sola base de datos, Esto proporciona independencia del
                        sitio central al permitir que los datos se ubiquen en diferentes ubicaciones físicas.
                    </li>
                </ul>
            </div>


            <h3>3. Operación continua</h3>
            <p>
                Por si solo, MySQL no proporciona una operación continua (24/7), sin embargo existen estrategias y herramientas que se pueden utilizar en combinación con
                MySQL para lograr una operación continua en un entorno distribuido. Entre estrategias resalta:
            </p>
            <div>
                <ul>
                    <li>
                        Replicacion. Replica los datos desde un servidor maestro a los servidores esclavos, proporcionando redundancia y tolerancia a fallos;
                        contribuyendo a una operaci ́on continua en caso de fallos en el servidor principal.
                    </li>
                    <li>
                        Cluster de MySQL. Es una solución de BDD de MySQL que proporciona alta disponibilidad y operación continua; utiliza una arquitectura compartida y
                        distribuida en la que los datos se almacenan y se replican en varios nodos, garantizando redundancia y la disponibilidad continua de los datos,
                        incluso en caso de fallos en el nodo.
                    </li>
                    <li>
                        Gestión de Clusteres y Alta Disponibilidad. Existen herramientas y soluciones de terceros que facilitan y garantizan la disponibilidad.
                        Pueden automatizar tareas como detección de fallos, conmutación por error y redistribución de la carga, lo que contribuye a mantener una
                        operación continua en un entorno distribuido.
                    </li>
                </ul>
            </div>


            <h3>4. Independencia de ubicación</h3>
            <p>
                MySQL ofrece cierto grado de independencia de ubicación en el sentido de que puede instalarse y utilizarse en servidores que pueden estar físicamente ubicados
                en diferentes lugares. Esto significa que las aplicaciones pueden conectarse a una base de datos MySQL desde diferentes ubicaciones, siempre y cuando haya una
                conexión de red disponible entre el cliente y el servidor MySQL.
            </p>
            <p>
                Sin embargo, es importante tener en cuenta que la independencia de ubicación en MySQL no implica necesariamente que la base de datos en sí sea distribuida o
                replicada automáticamente en diferentes ubicaciones. La replicación, la fragmentación o la distribución de datos en múltiples ubicaciones son configuraciones
                y estrategias adicionales que deben implementarse para lograr la disponibilidad y la redundancia geográfica de los datos en un entorno de bases de datos
                distribuidas.
            </p>


            <h3>5. Independencia de fragmentación</h3>
            <p>
                MySQL no ofrece nativamente independencia de fragmentación. MySQL es un sistema de gestión de bases de datos relacional que se utiliza principalmente para bases
                de datos de un solo nodo. Sin embargo, existen soluciones y extensiones de terceros, como MySQL Cluster, que permiten la fragmentación de datos y proporcionan
                cierto grado de independencia de fragmentación.
            </p>


            <h3>6. Independencia de replicación</h3>
            <p>
                MySQL ofrece cierto grado de independencia de replicación. Sin embargo, la replicación en MySQL es un proceso que debe configurarse y administrarse manualmente,
                y aunque proporciona redundancia y alta disponibilidad, no oculta por completo la complejidad de la replicación a los usuarios finales.
            </p>
            <p>
                Cuando se configura la replicación en MySQL, se deben definir claramente los servidores maestro y esclavo, así como establecer cómo se propagarán los cambios
                de datos entre ellos. Los usuarios y las aplicaciones deben ser conscientes de la existencia de estos servidores y de cómo interactuar con ellos en caso de
                que se produzcan fallos o interrupciones en el servidor principal.
            </p>

            <h3>7. Procesamiento de consultas distribuidas</h3>
            <p>
                El procesamiento de consultas distribuidas es posible en el momento de ejecutar consultas que involucran datos distribuidos en múltiples servidores o instancias
                de bases de datos MySQL. Esto puede ser útil en entornos donde los datos están fragmentados o distribuidos en diferentes ubicaciones geográficas, o donde se
                necesita escalar horizontalmente para manejar grandes volúmenes de datos.
            </p>
            <p>
                Para lograr esto existen tres métodos diferentes, los cuales los podemos utilizar dependiendo el contexto y las características de nuestro sistema.
            </p>
            <p>
                <strong>Federated Tables:</strong> MySQL proporciona una característica llamada FEDERATED Tables, que permite acceder y consultar datos de tablas en bases de
                datos MySQL remotas como si fueran tablas locales.
            </p>
            <p>
                Una FEDERATED  table consta de dos elementos:
            </p>
            <div>
                <ul>
                    <li>
                        Un Servidor remoto con una tabla de base de datos, que a su vez consta de la definición de la tabla (almacenada en el diccionario de datos MySQL)
                        y la tabla asociada.
                    </li>
                    <li>
                        Un servidor local con una tabla de base de datos, donde la definición de la tabla coincide con la de la tabla correspondiente en el servidor
                        remoto. La definición de la tabla se almacena en el diccionario de datos. No hay ningún archivo de datos en el servidor local. En cambio,
                        la definición de la tabla incluye una cadena de conexión que apunta a la tabla remota.
                    </li>
                </ul>
            </div>

            <p>
                Cuando un cliente emite una declaración SQL que hace referencia a una FEDERATED tabla, el flujo de información entre el servidor local (donde se ejecuta
                la declaración SQL) y el servidor remoto (donde se almacenan físicamente los datos) es el siguiente:
            </p>
            <div>
                <ol>
                    <li>
                        El motor de almacenamiento examina cada columna que FEDERATED tiene la tabla y construye una declaración SQL adecuada que hace referencia a la
                        tabla remota.
                    </li>
                    <li>
                        La declaración se envía al servidor remoto mediante la API del cliente MySQL.
                    </li>
                    <li>
                        El servidor remoto procesa la declaración y el servidor local recupera cualquier resultado que produzca la declaración (un recuento de filas
                        afectadas o un conjunto de resultados).
                    </li>
                    <li>
                        Si la declaración produce un conjunto de resultados, cada columna se convierte al formato del motor de almacenamiento interno que el FEDERATED
                        motor espera y puede usar para mostrar el resultado al cliente que emitió la declaración original.
                    </li>
                </ol>
            </div>

            <p>
                <strong>Replicación:</strong> La replicación en MySQL es un proceso que permite mantener copias idénticas de una base de datos en múltiples servidores,
                conocidos como el servidor maestro y los servidores esclavos. Esto proporciona redundancia y aumenta la disponibilidad de los datos al permitir que los
                servidores esclavos sirvan como copias de respaldo del servidor maestro en caso de falla.
            </p>
            <p>
                La replicación en MySQL consta de los siguientes elementos:
            </p>

            <div>
                <ul>
                    <li>
                        Un servidor maestro, que es el servidor que contiene la base de datos original que se desea replicar.
                    </li>
                    <li>
                        Uno o más servidores esclavos, que son servidores que mantienen copias de la base de datos del servidor maestro.
                    </li>
                </ul>
            </div>

            <p>
                El proceso de replicación en MySQL funciona de la siguiente manera:
            </p>
            <div>
                <ol>
                    <li>
                        El servidor maestro registra todas las actualizaciones realizadas en la base de datos en su registro binario.
                    </li>
                    <li>
                        Los servidores esclavos se conectan al servidor maestro y solicitan copias de los registros binarios.
                    </li>
                    <li>
                        El servidor maestro envía los registros binarios a los servidores esclavos, que los aplican a sus propias bases de datos para mantenerlas
                        sincronizadas con el servidor maestro.
                    </li>
                    <li>
                        Los servidores esclavos pueden estar configurados para actuar como servidores de solo lectura, lo que significa que los clientes pueden
                        realizar consultas de solo lectura en ellos, aliviando la carga del servidor maestro.
                    </li>
                </ol>
            </div>
            <p>
                <strong>Clúster:</strong> Un clúster MySQL es una configuración que consta de varios nodos de servidor MySQL interconectados que trabajan juntos para
                proporcionar alta disponibilidad y escalabilidad. En un clúster MySQL, los datos se distribuyen y replican entre los nodos para garantizar la redundancia y
                la integridad de los datos, así como para distribuir la carga de trabajo entre los nodos para mejorar el rendimiento.
            </p>
            <p>
                La arquitectura básica de un clúster MySQL consta de los siguientes elementos:
            </p>
            <div>
                <ul>
                    <li>
                        Varios nodos de servidor MySQL, que son instancias de servidor MySQL que forman parte del clúster.
                    </li>
                    <li>
                        Un nodo de coordinación, que es responsable de coordinar las operaciones de escritura y lectura entre los nodos de servidor MySQL.
                    </li>
                </ul>
            </div>
            <p>
                El funcionamiento de un clúster MySQL implica lo siguiente:
            </p>
            <div>
                <ol>
                    <li>
                        Los datos se dividen en fragmentos y se distribuyen entre los nodos de servidor MySQL para garantizar una distribución uniforme de la carga.
                    </li>
                    <li>
                        Cada nodo de servidor MySQL puede tener réplicas de los fragmentos de datos para garantizar la redundancia y la disponibilidad.
                    </li>
                    <li>
                        El nodo de coordinación administra la asignación de consultas entre los nodos de servidor MySQL y coordina las operaciones de escritura para
                        garantizar la coherencia de los datos.
                    </li>
                    <li>
                        En caso de que un nodo de servidor MySQL falle, el clúster MySQL puede reasignar automáticamente sus fragmentos de datos a otros nodos
                        disponibles para garantizar la continuidad del servicio.
                    </li>
                </ol>
            </div>

            <h3>8. Administración de transacciones distribuidas</h3>
            <p>
                La administración de transacciones distribuidas en MySQL es un aspecto fundamental para garantizar la coherencia y la integridad de los datos en entornos
                distribuidos. Aunque MySQL no proporciona funcionalidades específicas para la administración de transacciones distribuidas de forma nativa, es posible
                implementar diversas estrategias para lograr este objetivo.
            </p>
            <p>
                Una estrategia común para administrar transacciones distribuidas en MySQL es mediante el uso de transacciones distribuidas coordinadas por la lógica de la
                aplicación. Esto implica dividir una transacción en pasos más pequeños y ejecutarlos en diferentes nodos MySQL. Luego, la lógica de la aplicación se encarga
                de coordinar estos pasos, asegurando que se completen correctamente o se reviertan si algún paso falla.
            </p>
            <p>
                Es importante tener en cuenta que al administrar transacciones distribuidas en MySQL, se deben considerar aspectos como la consistencia de los datos, la
                disponibilidad y el rendimiento. La implementación de transacciones distribuidas en MySQL puede ser compleja y requerir un diseño cuidadoso para garantizar
                un funcionamiento óptimo del sistema distribuido.
            </p>


            <h3>9.Independencia de hardware</h3>
            <p>
                MySQL ofrece una alta independencia de hardware, lo que significa que puede ejecutarse en una amplia variedad de plataformas y configuraciones de hardware.
                Esto se debe a su diseño modular y su capacidad para adaptarse a diferentes entornos de hardware y sistemas operativos.
            </p>
            <p>
                MySQL puede ejecutarse en sistemas de hardware con diferentes capacidades de procesamiento, memoria y almacenamiento. Esto permite a los usuarios implementar
                MySQL en una amplia gama de dispositivos, desde servidores de alta gama hasta sistemas embebidos de baja potencia.
            </p>
            <p>
                Además, MySQL es compatible con una variedad de sistemas operativos, incluyendo Linux, Windows y macOS. Esto proporciona a los usuarios la flexibilidad para
                elegir el sistema operativo que mejor se adapte a sus necesidades y requisitos de hardware.
            </p>


            <h3>10. Independencia de sistema operativo</h3>
            <p>
                MySQL es altamente compatible con una amplia variedad de sistemas operativos, incluyendo Windows, Linux, macOS, FreeBSD y Solaris, entre otros. Esto significa
                que los desarrolladores y administradores de bases de datos tienen la flexibilidad de elegir la plataforma que mejor se adapte a sus necesidades y preferencias.
                Además, MySQL se integra fácilmente con las funcionalidades específicas de cada sistema operativo, aprovechando sus ventajas y optimizando el rendimiento.
            </p>
            <p>
                Por ejemplo, en entornos empresariales, MySQL puede ser desplegado en servidores Linux de alto rendimiento para aprovechar su estabilidad y escalabilidad,
                mientras que en entornos de desarrollo o pruebas, puede ejecutarse en sistemas Windows para facilitar la familiaridad del usuario con la interfaz gráfica.
                Esta independencia de sistema operativo hace que MySQL sea una opción versátil y adaptable para una amplia variedad de escenarios y requisitos de aplicación.
            </p>

            <h3>11. Independencia de red</h3>
            <p>
                La arquitectura de MySQL se basa en el uso del protocolo estándar TCP/IP para la comunicación entre clientes y servidores. Esta independencia de red permite a
                los usuarios acceder a sus bases de datos MySQL desde cualquier ubicación con conectividad a Internet, siempre y cuando cuenten con los permisos adecuados y
                la configuración de red correcta.
            </p>
            <p>
                Además, MySQL ofrece soporte para conexiones seguras a través de SSL/TLS, lo que garantiza la privacidad y seguridad de los datos transmitidos a través de la
                red. Esta capacidad de trabajar de manera independiente de la red facilita la implementación de aplicaciones distribuidas y el acceso remoto a las bases de
                datos MySQL, lo que es especialmente beneficioso en entornos empresariales y de trabajo remoto.
            </p>


            <h3>12. Independencia de DBMS</h3>
            <p>
                Aunque MySQL es un sistema de gestión de bases de datos completo y robusto por sí mismo, también es compatible con la interoperabilidad con otros DBMS a
                través de estándares como SQL y ODBC. Esto significa que los usuarios pueden integrar MySQL con otros sistemas de bases de datos si es necesario, facilitando
                la migración de datos, la consolidación de sistemas o la conexión con aplicaciones que utilizan diferentes DBMS.
            </p>
            <p>
                Por ejemplo, MySQL puede interactuar con sistemas de bases de datos Oracle, Microsoft SQL Server, PostgreSQL y otros, permitiendo a los usuarios realizar
                consultas y operaciones entre diferentes plataformas de manera transparente. Esta independencia de DBMS amplía las opciones y la flexibilidad para los
                desarrolladores y administradores de bases de datos, permitiéndoles utilizar MySQL en entornos heterogéneos y adaptarse a las necesidades cambiantes del
                negocio.
            </p>

            <h2>Cuestionario</h2>                
            <form onSubmit={handleSubmit}>

                <p>1. ¿Qué se entiende por homogeneidad en un sistema de gestión de bases de datos relacional como MySQL?</p>
                <select
                    name="homogeneidad_respuesta"
                    value={answers.homogeneidad_respuesta}
                    onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="consistencia_en_la_estructura">Consistencia en la estructura de las tablas</option>
                    <option value="flexibilidad_en_la_estructura">Flexibilidad en la estructura de las tablas</option>
                    <option value="variedad_en_los_datos">Variedad en los datos almacenados</option>
                </select>
                <p>{checkAnswer('homogeneidad_respuesta')}</p>

                <p>2. ¿Qué implica la autonomía local en un sistema de bases de datos distribuido usando MySQL?</p>
                <select name="autonomia_local_respuesta" value={answers.autonomia_local_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="escrituras_en_un_unico_servidor">Escrituras en un único servidor</option>
                    <option value="escrituras_en_varios_servidores">Escrituras en varios servidores</option>
                    <option value="lecturas_y_escrituras_distribuidas">Lecturas y escrituras distribuidas</option>
                </select>
                <p>{checkAnswer('autonomia_local_respuesta')}</p>

                <p>3. ¿Cómo se puede lograr la independencia del sitio central en MySQL?</p>
                <select name="independencia_sitio_central_respuesta" value={answers.independencia_sitio_central_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="replicacion_y_particion_horizontal">Replicación y partición horizontal</option>
                    <option value="un_unico_servidor">Un único servidor</option>
                    <option value="solo_lecturas_distribuidas">Solo lecturas distribuidas</option>
                </select>
                <p>{checkAnswer('independencia_sitio_central_respuesta')}</p>

                <p>4. ¿Qué estrategias se pueden utilizar para asegurar una operación continua con MySQL?</p>
                <select name="operacion_continua_respuesta" value={answers.operacion_continua_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="replicacion_y_cluster_mysql">Replicación y Cluster de MySQL</option>
                    <option value="replicacion_sola">Solo replicación</option>
                    <option value="ninguna_estrategia">Ninguna estrategia</option>
                </select>
                <p>{checkAnswer('operacion_continua_respuesta')}</p>

                <p>5. ¿Qué se entiende por independencia de ubicación en MySQL?</p>
                <select name="independencia_ubicacion_respuesta" value={answers.independencia_ubicacion_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="servidores_en_diferentes_lugares">Servidores en diferentes lugares</option>
                    <option value="servidores_en_un_unico_lugar">Servidores en un único lugar</option>
                    <option value="datos_no_replicados">Datos no replicados</option>
                </select>
                <p>{checkAnswer('independencia_ubicacion_respuesta')}</p>

                <p>6. ¿Ofrece MySQL independencia de fragmentación nativamente? Explica.</p>
                <select name="independencia_fragmentacion_respuesta" value={answers.independencia_fragmentacion_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="no">No</option>
                    <option value="si">Sí</option>
                    <option value="parcialmente">Parcialmente</option>
                </select>
                <p>{checkAnswer('independencia_fragmentacion_respuesta')}</p>

                <p>7. ¿Cómo maneja MySQL la independencia de replicación?</p>
                <select name="independencia_replicacion_respuesta" value={answers.independencia_replicacion_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="configuracion_manual">Configuración manual</option>
                    <option value="automatica">Automática</option>
                    <option value="no_tiene_independencia">No tiene independencia</option>
                </select>
                <p>{checkAnswer('independencia_replicacion_respuesta')}</p>

                <p>8. ¿Cuál es una característica que permite a MySQL acceder y consultar datos de tablas en bases de datos remotas?</p>
                <select name="consultas_distribuidas_respuesta" value={answers.consultas_distribuidas_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="federated_tables">Federated Tables</option>
                    <option value="replicacion">Replicación</option>
                    <option value="cluster">Cluster</option>
                </select>
                <p>{checkAnswer('consultas_distribuidas_respuesta')}</p>

                <p>9. ¿Cuál es una estrategia común para administrar transacciones distribuidas en MySQL?</p>
                <select name="transacciones_distribuidas_respuesta" value={answers.transacciones_distribuidas_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="coordinacion_por_logica_de_aplicacion">Coordinación por lógica de aplicación</option>
                    <option value="transacciones_nativas_mysql">Transacciones nativas de MySQL</option>
                    <option value="sin_transacciones_distribuidas">Sin transacciones distribuidas</option>
                </select>
                <p>{checkAnswer('transacciones_distribuidas_respuesta')}</p>

                <p>10. ¿Qué permite a MySQL ejecutarse en una amplia variedad de plataformas y configuraciones de hardware?</p>
                <select name="independencia_hardware_respuesta" value={answers.independencia_hardware_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="diseno_modular">Diseño modular</option>
                    <option value="compatibilidad_con_otros_dbms">Compatibilidad con otros DBMS</option>
                    <option value="flexibilidad_en_hardware">Flexibilidad en Hardware</option>
                </select>
                <p>{checkAnswer('independencia_hardware_respuesta')}</p>

                <p>11. ¿Cuál es una ventaja de la alta compatibilidad de MySQL con diferentes sistemas operativos?</p>
                <select name="independencia_sistema_operativo_respuesta" value={answers.independencia_sistema_operativo_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="flexibilidad_sistemas_operativos">Flexibilidad para diferentes SO</option>
                    <option value="mejor_rendimiento">Mejor rendimiento</option>
                    <option value="menor_costo">Menor costo</option>
                </select>
                <p>{checkAnswer('independencia_sistema_operativo_respuesta')}</p>

                <p>12. ¿Qué protocolo ofrece MySQL para soporte a conexiones seguras?</p>
                <select name="independencia_red_respuesta" value={answers.independencia_red_respuesta} onChange={handleChange}>
                    <option value="">Seleccione una respuesta</option>
                    <option value="tcp_ip">TCP/IP</option>
                    <option value="ssl_tls">SSL/TLS</option>
                    <option value="http">HTTP</option>
                </select>
                <p>{checkAnswer('independencia_red_respuesta')}</p>
              <p><input type="submit" value="Enviar" /></p>
            </form>
        </div>
    );
}

export default Quiz;