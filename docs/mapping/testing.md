# Тестирование карты

### Тестирование карты
Перед тестированием не забудьте сохранить изменения!  
Протестировать карту можно с помощью `mapinit <ID карты>`. Это снимет карту с паузы и **инициализирует** её - камеры подключатся к роутерам, спавнеры заспавнят предметы и т.п. При этом функционал карты может быть ограничен по сравнению с обычным раундом. **Сохранять инициализированную карту нельзя - она не будет загружаться.**  
Чтобы продолжить маппинг, вы можете загрузить ту же карту (вы же сохранили изменения перед тестированием?) через mapping но с другим ID.
Однако, во избежание лишней нагрузки на процессор я рекомендую делать полный рестарт раунда (restartroundnow). Это уберёт все карты что вы загрузили через mapping или loadmap.

### Тестирование карты в раунде
Для тестирования карты в раунде вам потребуется создать новый прототип станции. 

- Сначала переместите карту из data в папку `Resources/Maps/SS220` - там лежат файлы карт.
- Прототипы станций хранятся в другой папке - в `/Resources/Prototypes/SS220/Maps/`. 
  Зайдите туда и скопируйте любой из лежащих там .yml файлов. Оставьте его в этой же папке и дайте ему название латиницей без пробелов.
- Откройте его в любом текстовом редакторе (блокнот подойдёт, но для редактирования прототипов Notepad++ будет удобнее).

Вот как он у вас может выглядеть (на примере Frankenstein):

```
- type: gameMap
  id: Frankenstein
  mapName: 'NSS Frankenstein'
  mapPath: /Maps/SS220/frankenstein.yml
  minPlayers: 0
  maxPlayers: 65
  stations:
    Boxstation:
      stationProto: FrankensteinStation
      components:
        - type: StationNameSetup
          mapNameTemplate: '{0} Frankenstein {1}'
          nameGenerator:
            !type:NanotrasenNameGenerator
            prefixCreator: '-SS220'
        - type: StationEmergencyShuttle
          emergencyShuttlePath: /Maps/SS220/Shuttles/emergency/emergency_frankenstein.yml
        - type: StationJobs
          availableJobs:
            #service
            Captain: [ 1, 1 ]
            HeadOfPersonnel: [ 1, 1 ]
            SeniorService: [ 1, 1]
            Bartender: [ 2, 2 ]
            Botanist: [ 3, 3 ]
            Chef: [ 2, 2 ]
            Janitor: [ 3, 3 ]
            Chaplain: [ 2, 2 ]
            Librarian: [ 2, 2 ]
            ServiceWorker: [ 4, 4 ]
            #engineering
            ChiefEngineer: [ 1, 1 ]
            SeniorEngineer: [ 1, 1]
            AtmosphericTechnician: [ 3, 3 ]
            StationEngineer: [ 5, 5 ]
            TechnicalAssistant: [ 8, 8 ]
            #medical
            ChiefMedicalOfficer: [ 1, 1 ]
            SeniorPhysician: [ 1, 1]
            Chemist: [ 2, 2 ]
            MedicalDoctor: [ 4, 4 ]
            Paramedic: [ 1, 1 ]
            MedicalIntern: [ 8, 8 ]
            Psychologist: [ 1, 1 ]
            #science
            ResearchDirector: [ 1, 1 ]
            SeniorResearcher: [ 1, 1]
            Scientist: [ 5, 5 ]
            ResearchAssistant: [ 8, 8 ]
            StationAi: [ 1, 1 ]
            Borg: [ 3, 3 ]
            #security
            HeadOfSecurity: [ 1, 1 ]
            Warden: [ 1, 1 ]
            SeniorOfficer: [ 1, 1]
            SecurityOfficer: [ 6, 6 ]
            Detective: [ 1, 1 ]
            SecurityPilot: [ 2, 2 ]
            SecurityCadet: [ 4, 4 ]
            Magistrate: [ 1, 1 ]
            IAA: [ 2, 2 ] # Corvax-IAA
            Lawyer: [ 3, 3 ]
            BlueShield: [ 1, 1 ]
            Brigmedic: [ 1, 1 ]
            #supply
            Quartermaster: [ 1, 1 ]
            SalvageSpecialist: [ 3, 3 ]
            CargoTechnician: [ 3, 3 ]
            #civilian
            Passenger: [ -1, -1 ]
            Clown: [ 1, 1 ]
            Mime: [ 1, 1 ]
            Musician: [ 2, 2 ]
            Reporter: [ 2, 2 ]
        - type: StationGoal
          goals:
          #Base
          - Shuttle
          - Singularity
          - SolarPanels
          - Artifacts
          - Bank
          - Zoo
          - MiningOutpost
          - Tesla
          #SS220
          - Saveplanet
          - Expedition
          - Guests
          - PneumaticTubes
          - Robotisation
          - Homekeepers
          - ComplexPVO  

- type: entity
  id: FrankensteinStation
  parent: StandardNanotrasenStation
  categories: [ HideSpawnMenu ]
  components:
    - type: StationMinimap
      minimapData: !type:StationMinimapData
        mapTexture: SS220/ViewableMaps/Frankenstein.png
        originOffset: 110, 181
        mapScale: 6.4
        
```

- Найдите строку начинающуюся на `id:` (она ближе к началу файла) и впишите туда любой не занятый ID вместо существующего. Пишется латиницей без пробелов. Удобнее всего если он схож с названием карты. Этот ID будет использоваться для загрузки карты через `forcemap`.
- Найдите строку `mapPath:`, она тоже близко к началу файла. Укажите в ней путь к файлу карты. Обратите внимание на то что путь начинается с `/Maps`. Так же проверьте не используете ли вы символ \\ в пути (он там может быть если вы скопировали его из проводника). Если они там есть, замените их на `/`
- Найдите строку `stationProto:`, в ней указывается дополнительный родительский элемент, что отвечает за миникарту для камер. Измените его похожим образом, то есть `<ВашеНазвание>Station`. Используйте обязательно латиницу без пробелов.
- Ближе к концу файла найдите отдельный участкой, на примере это `entity` с `id: FrankensteinStation`. Соответственно здесь вам нужно изменить `FrankensteinStation` на ваш `<ВашеНазвание>Station` - то что вы указывали в `stationProto` выше.
- Сохраните файл. Перезапустите сервер и введите в консоли forcemap <ID который указан в вашем прототипе>. При вводе ID должен появлятся в подсказках автозаполнения. После этого введите restartroundnow. Если загрузить карту не вышло, то скорее всего вы допустили синтаксическую ошибку в прототпе карты.

Теперь вы можете тестировать вашу карту в полноценном раунде. Если вы обновили свою карту, то достаточно перекинуть её из `data` в `Resources/Maps/SS220` заменив старую версию. 

Убедитесь что имя файла осталось то же что и раньше. После этого будет достаточно еще раз прописать forcemap и перезапустить раунд.  

Так же некоторые профессии могут отсутствовать даже если вы добавили спавнер. Это происходит из-за того, что доступные профессии и количество сотрудников перечислены в прототипе карты, ниже строки `availableJobs:`  

Редактируйте осторожно, ошибки синтаксиса приведут к тому что прототип карты не будет загружен и вы просто не найдёте своей карты. При изменениях в прототипе перезапустить раунд недостаточно, нужно перезапускать весь сервер.

Подробнее о том, как полностью написать свой прототип станции, что в нём можно дополнительно указать - ознакомиться можно в полноценном гайде "Моя первая станция".