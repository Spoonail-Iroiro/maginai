// tools/dts-generator.mjsによって生成されたファイルです。
// このファイルを直接編集しないでください。

declare class tDefault {
  popCallBacks: any;
  popPostMessageCallBacks: any;
  jss: any;
  popWindowPostMessageInitFlg: any;
  uniqueTimeValue: any;
  cacheImages: any;
  init(): void;
  getElement(a: any): any;
  toInt(a: any): any;
  toFloat(a: any): any;
  toNumber(a: any): any;
  makeKey(a: any): any;
  getStringDateToObject(a: any): any;
  getDateToObject(a: any): any;
  getCalStrDate(a: any, b: any, c: any, d: any, e: any, f: any, h: any): any;
  getCalDate(a: any, b: any, c: any, d: any, e: any, f: any, h: any): any;
  checkEmailFormat(a: any): any;
  checkTelFormat(a: any, b: any): any;
  checkPostcodeFormat(a: any): any;
  checkUrlFormat(a: any): any;
  getOneByteCharacter(a: any): any;
  getTwoByteCharacter(a: any): any;
  getOneKanaToTwoKana(a: any): any;
  getTwoKanaToOneKana(a: any): any;
  getKanaToHira(a: any): any;
  getHiraToKana(a: any): any;
  getArrayIndex(a: any, b: any): any;
  fillZero(a: any, b: any): any;
  cancelTextSelect(): void;
  clone(a: any): any;
  isArray(a: any): any;
  inArray(a: any, b: any): any;
  getIncludeSize(a: any, b: any, c: any, d: any, e: any, f: any): any;
  getFillSize(a: any, b: any, c: any, d: any, e: any, f: any): any;
  jsonDecode(a: any): any;
  jsonEncode(a: any): any;
  getServerData(a: any): any;
  getIntArray(a: any): any;
  splitSpace(a: any): any;
  focusFirstTarget(a: any): any;
  getFocusTarget(): any;
  blur(): void;
  viewPopWindow(a: any, b: any, c: any, d: any, e: any, f: any, h: any, g: any, k: any, p: any, l: any, q: any, u: any): any;
  viewPopWindowPostMessage(a: any, b: any, c: any, d: any, e: any, f: any, h: any, g: any, k: any, p: any, l: any, q: any, u: any): any;
  closeMyWindow(a: any): void;
  popCallBack(a: any, b: any, c: any): any;
  popPostMessageCallBack(a: any): any;
  popPostMessageCallBackFromChild(a: any, b: any, c: any, d: any): void;
  getCutText(a: any, b: any, c: any): any;
  getParseGet(): any;
  setCursor(a: any, b: any, c: any): any;
  getCursor(a: any): any;
  getPostcodeToAddress(a: any, b: any, c: any): any;
  availableLocalData(): any;
  getLocalData(a: any): any;
  setLocalData(a: any, b: any): any;
  removeLocalData(a: any): any;
  bytesToSize(a: any): any;
  checkMobile(): any;
  getDelayEvent(): any;
  isElement(a: any): any;
  getPrefectures(): any;
  getPrefectureGroups(): any;
  getMoonAge(a: any): any;
  loadJs(a: any, b: any, c: any, d: any, e: any): any;
  getRelativeTimeElement(a: any, b: any): any;
  getRgb(a: any): any;
  getRgb16(a: any): any;
  getImageUniquePath(a: any, b: any): any;
  setImageCache(a: any, b: any): any;
  getImageCache(a: any): any;
  copy(a: any): any;
}

declare class tEvent {
  mobileFlg: any;
  isPassiveSupportedFlg: any;
  singleTouchInitFlg: any;
  singleIdentifier: any;
  oldSingleIdentifier: any;
  listeners: any;
  listenerIndex: any;
  init(): void;
  initSingleTouch(): void;
  setSingleTouchIdentifier(a: any, b: any): any;
  isSingleTouch(a: any, b: any): any;
  initPassiveSupported(): void;
  addNativeEvent(a: any, b: any, c: any, d: any): void;
  removeNativeEvent(a: any): any;
}

declare class tGameAcn {
  parent: any;
  init(a: any): void;
}

declare class tGameAdventurerGuild {
  parent: any;
  questMaxNum: any;
  nextCreateTime: any;
  quests: any;
  attackedList: any;
  iconInfo: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  deleteReceivedQuest(a: any): any;
  getCharactorQuests(a: any): any;
  removeCharactor(a: any): any;
  removeMap(a: any): void;
  getTownQuestTarget(a: any): any;
  getTownQuestTargetFromMapId(a: any): any;
  createTownQuests(a: any): any;
  getQuestFreeCharactors(a: any): any;
  createTownQuest(a: any, b: any, c: any): any;
  createTownJikeidanQuest(a: any, b: any): any;
  createTownQuest_1(a: any, b: any, c: any, d: any): any;
  createTownQuest_2(a: any, b: any, c: any, d: any): any;
  createTownQuest_3(a: any, b: any, c: any, d: any): any;
  createTownQuest_4(a: any, b: any, c: any, d: any): any;
  createTownQuest_4_field(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_5(a: any, b: any, c: any, d: any): any;
  createTownQuest_6(a: any, b: any, c: any, d: any): any;
  createTownQuest_7(a: any, b: any, c: any, d: any): any;
  createTownQuest_8(a: any, b: any, c: any, d: any): any;
  createTownQuest_9(a: any, b: any, c: any, d: any): any;
  createTownQuest_10(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_11(a: any, b: any, c: any, d: any): any;
  createTownQuest_12(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_13(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_14(a: any, b: any, c: any, d: any, e: any): any;
  createTownQuest_15(a: any, b: any, c: any, d: any, e: any): any;
  getQuestSentence(a: any, b: any): any;
  getQuestSentence_1(a: any, b: any): any;
  getQuestSentence_2(a: any, b: any): any;
  getQuestSentence_3(a: any, b: any): any;
  getQuestSentence_4(a: any, b: any): any;
  getQuestSentence_4_field(a: any, b: any): any;
  getQuestSentence_5(a: any, b: any): any;
  getQuestSentence_6(a: any, b: any): any;
  getQuestSentence_7(a: any, b: any): any;
  getQuestSentence_8(a: any, b: any): any;
  getQuestSentence_9(a: any, b: any): any;
  getQuestSentence_10(a: any, b: any): any;
  getQuestSentence_11(a: any, b: any): any;
  getQuestSentence_12(a: any, b: any): any;
  getQuestSentence_13(a: any, b: any): any;
  getQuestSentence_14(a: any, b: any): any;
  getQuestSentence_15(a: any, b: any): any;
  setMyTown(a: any, b: any, c: any): void;
  getQuestRewordMessage(a: any): any;
  addReceived(a: any, b: any, c: any): any;
  initReceived_1(a: any, b: any): any;
  initReceived_2(a: any, b: any): any;
  initReceived_3(a: any, b: any): any;
  initReceived_4(a: any, b: any): any;
  initReceived_5(a: any, b: any): any;
  initReceived_6(a: any, b: any): any;
  initReceived_7(a: any, b: any): any;
  initReceived_8(a: any, b: any): any;
  initReceived_9(a: any, b: any): any;
  initReceived_10(a: any, b: any): any;
  initReceived_11(a: any, b: any): any;
  initReceived_12(a: any, b: any): any;
  initReceived_13(a: any, b: any): any;
  initReceived_14(a: any, b: any): any;
  initReceived_15(a: any, b: any): any;
  finishQuest(a: any, b: any, c: any): any;
  failureQuest(a: any, b: any, c: any, d: any, e: any): any;
  clearQuestData(a: any, b: any, c: any): any;
  checkTimeOver(a: any): any;
  getTowns(a: any): any;
  getTownsFromPosition(a: any, b: any): any;
  getAffectAnswer(a: any): any;
  affectAnswer(a: any): void;
  affectAnswer_2(a: any, b: any): void;
  affectAnswer_3(a: any, b: any): void;
  affectAnswer_9(a: any, b: any): void;
  getTargetItem(a: any): any;
  getTargetQuestItem(a: any): any;
  createID(): any;
  searchReceivedQuest(a: any): any;
  getFieldObjectToQuest1Name(a: any): any;
  getQuestFinishFameExp(a: any, b: any, c: any): any;
  getQuestFinishGaeExp(a: any, b: any, c: any): any;
  changeMapEvent(a: any): void;
  createQuestRank(): any;
  createQuestItem_2(a: any): any;
  createQuestItem_3(a: any): any;
  updateAttackedList(): void;
  getAttackedList(): any;
  calQuestIconData(): void;
  addQuestSentenceCommon(a: any, b: any, c: any): void;
  isSokuji(a: any): any;
  actSokuji(a: any): void;
  createQuestTargetType(a: any, b: any): any;
  guildpointkau(a: any, b: any): void;
  getGuildPointBottomData(): any;
}

declare class tGameAdventurerGuildConfirmWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewQuestMaxNum: any;
  cursor: any;
  init(b: any): void;
  clear(): void;
  viewWindow(b: any, c: any): any;
  drawPage(b: any): void;
  getCursor(b: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
  setCursor(b: any): any;
  viewInfoWindow(b: any): any;
}

declare class tGameAdventurerGuildWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewQuestMaxNum: any;
  cursor: any;
  talkData: any;
  init(c: any): void;
  clear(): void;
  viewWindow(c: any, a: any): any;
  drawPage(c: any): void;
  getCursor(c: any): any;
  setFrameEvent(c: any): void;
  setFrameEvent_dispose(c: any): void;
  setFrameEvent_frame(c: any): void;
  setFrameEvent_draw(c: any): void;
  clearCanvas(): void;
  setCursor(c: any): any;
  updateQuests(): void;
  viewInfoWindow(c: any): any;
  viewConfirm(c: any): any;
  checkFinish(c: any): any;
  getSuccessItem(c: any): void;
  addSuccessFaith(c: any, a: any): any;
  firstAccess(c: any, a: any): void;
  getGmChara(c: any): any;
  loadTalkData(c: any): any;
  firstGmAccess(c: any): void;
  gmNohin(c: any): void;
  inGuildMokutekichi(c: any, a: any): void;
  getQuestMessage(c: any): any;
  oneActionFinishAction(c: any, a: any, b: any): void;
  oneActionFinishAction_guildtargetitem(c: any, a: any): void;
}

declare class tGameAffectMap {
  parent: any;
  init(a: any): void;
}

declare class tGameAkumuDungeon {
  parent: any;
  init(a: any): void;
  isSetAkumu(a: any): any;
  getDungeonLevel(a: any): any;
  akumuidomu(a: any): any;
  createDungeon(a: any): any;
  bossGekiha(a: any, b: any): any;
}

declare class tGameAllocateStatusWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  cursor: any;
  targets: any;
  init(a: any): void;
  clear(): void;
  viewSetWindow(a: any, c: any): void;
  view(a: any, c: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  drawSelectColumnData(a: any, c: any): void;
  changeSelectColumnItem(a: any): void;
  drawColumnData(a: any, c: any): any;
  okButtonColumnItem(a: any): any;
  viewPoint(): void;
}

declare class tGameAnimalWood {
  parent: any;
  init(c: any): void;
  tryMap(c: any): any;
  createMap(): any;
  getMapId(): any;
  createMap_act(c: any): any;
  addCharactor(c: any, d: any): any;
  affectBox(c: any, d: any): any;
  oneActionFinishAction(c: any, d: any, a: any): void;
  oneActionFinishAction_createanimalwood(c: any, d: any): any;
}

declare class tGameBaby {
  parent: any;
  data: any;
  range: any;
  init(c: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(c: any): any;
  clearDatas(): void;
  createBaby(c: any, a: any): any;
  getTogetherCharas(): any;
  sleepTogether(c: any): void;
  seicho(c: any, a: any): any;
  setHikitsugiData(c: any, a: any): any;
}

declare class tGameBazaarGenerator {
  parent: any;
  nextUpdateTime: any;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  oneActionFinishAction(a: any, e: any, b: any): void;
  oneActionFinishAction_createbazaar(a: any, e: any): any;
}

declare class tGameBgmResource {
  parent: any;
  soundData: any;
  playSounds: any;
  oggOrM4a: any;
  fadeTime: any;
  fadeCount: any;
  caches: any;
  init(a: any): void;
  loadSound(a: any): void;
  initLoad(a: any): void;
  getAudio(a: any): any;
  loadPreload(a: any): void;
  getPath(a: any): any;
  loadBuffer(a: any): any;
  stopSound(a: any): any;
  startSound(a: any): any;
  removeSound(a: any, b: any): any;
  insertPlay(a: any, b: any): any;
  insertPlay2(a: any, b: any, d: any): any;
  removeAllSound(a: any): void;
  play(a: any, b: any, d: any, c: any): any;
  setVolume(a: any): any;
  frameAction(a: any): void;
  reflectOption(a: any): void;
}

declare class tGameBlacksmith {
  parent: any;
  viewData: any;
  maxNum: any;
  init(d: any): void;
  getMaterialMaxNum(d: any): any;
  getSoukesshoNeedNum(): any;
  create(d: any, c: any, a: any, f: any): void;
  createMember(d: any, c: any, a: any, f: any): void;
  selectMaterial(d: any, c: any): void;
  selectEquipmentType2(d: any): any;
  selectSoukessho(d: any): any;
  getSuccessRate(d: any): any;
  getMaxRank(): any;
  actBlacksmith(): void;
  blacksmithResult(d: any, c: any): any;
  getExp(d: any, c: any, a: any): any;
  bunkai(d: any, c: any): void;
  getSoukesshoItems(): any;
}

declare class tGameButsu {
  parent: any;
  init(c: any): void;
  tryCreate(c: any): any;
  oneActionFinishAction(c: any, b: any, a: any): void;
  oneActionFinishAction_butsuevent1(c: any, b: any): any;
  oneActionFinishAction_butsubossgekiha(c: any, b: any): any;
  oneActionFinishAction_butsufirst(c: any, b: any): any;
  oneActionFinishAction_butsuchestopen(c: any, b: any): void;
  viewMap(c: any): void;
  deleteButsuCharactor(): any;
  selectAnswer(c: any): any;
  affectAnswer(c: any): void;
  calBasho(): any;
  affectObject(c: any): any;
  inTargetMap(c: any, b: any, a: any): any;
  createTargetMap(c: any, b: any): void;
  setTargetEvent(c: any, b: any): any;
  action_playerAffect(c: any, b: any, a: any, h: any): any;
  action_playerAffect2(c: any, b: any, a: any, h: any): any;
  keibiKaiwa(c: any, b: any): void;
  keibiEncount(c: any): any;
}

declare class tGameCalc {
  parent: any;
  init(a: any): void;
}

declare class tGameCasino {
  parent: any;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  exCoin(a: any): void;
  exItem(a: any, d: any): void;
  createExItems(): any;
}

declare class tGameCastleGenerator {
  parent: any;
  init(a: any): void;
  createCastleWithLoad(a: any, g: any): void;
  createCastle(a: any, g: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
}

declare class tGameChangeProfile {
  parent: any;
  data: any;
  init(a: any): void;
  initLoad(a: any): void;
  viewMember(a: any): void;
  viewOne(a: any, h: any, f: any, c: any): void;
}

declare class tGameCharactor {
  parent: any;
  charas: any;
  teams: any;
  levelFraction: any;
  limit: any;
  talkResetAddTime: any;
  playerTeamMemberLimitNum: any;
  maxDamage: any;
  conditionStatusPairs: any;
  statusMinMax: any;
  ctypeObjects: any;
  findPoliceConditions: any;
  init(a: any): void;
  getToPlayerRelation(a: any): any;
  getTeamRelation(a: any, b: any): any;
  getBattleCharactors(a: any, b: any): any;
  updateTeamRelation(a: any, b: any, c: any): any;
  addTeam(a: any): any;
  addTeamMember(a: any, b: any, c: any): any;
  restoreEventTeamMembers(a: any, b: any, c: any): any;
  removeEventTeamMember(a: any): any;
  removeTeamMember(a: any, b: any, c: any, d: any): any;
  removeTeam(a: any): any;
  removeTeam0(a: any): any;
  resetWaitTimeStorage(): void;
  addTargetCharactor(a: any): any;
  addMobCharactor(a: any): any;
  addAdventurerCharactor(a: any): any;
  addPeddlerCharactor(a: any): any;
  addPoliceCharactor(a: any): any;
  addSlavetraderCharactor(a: any): any;
  addSojiyaCharactor(a: any): any;
  addNoriaiBashaCharactor(a: any): any;
  addCriminalCharactor(a: any): any;
  addEnemy(a: any): any;
  addAnimal(a: any): any;
  getSlaveCharactor(a: any): any;
  addCharactor(a: any, b: any): any;
  deleteCharactor(a: any, b: any): any;
  getMapCharactors(a: any, b: any, c: any, d: any, e: any): any;
  isCantActCondition(a: any): any;
  affect(a: any): any;
  actCondition(a: any, b: any, c: any): any;
  musicAction(a: any): any;
  action(a: any): any;
  action2(a: any, b: any): any;
  action_forceAction(a: any, b: any, c: any, d: any): any;
  action_teamTsuibi(a: any, b: any, c: any): any;
  action_mapAction(a: any, b: any): any;
  action_targetMove(a: any, b: any, c: any): any;
  action_targetAction(a: any, b: any, c: any): any;
  action_playerAffect(a: any, b: any, c: any): any;
  action_playerAffectKojiki(a: any, b: any, c: any, d: any): any;
  action_randomMove(a: any, b: any, c: any): any;
  action_mudaAction(a: any, b: any): any;
  action_cure(a: any, b: any, c: any, d: any): any;
  action_support(a: any, b: any, c: any, d: any): any;
  action_curecdt(a: any, b: any, c: any, d: any): any;
  action_kuufuku(a: any, b: any, c: any): any;
  action_noroikeshi(a: any, b: any, c: any): any;
  action_kantei(a: any, b: any, c: any): any;
  action_sokuji(a: any, b: any, c: any): any;
  action_actionData(a: any, b: any, c: any, d: any, e: any, g: any): any;
  action_moveTekiseiKyori(a: any, b: any, c: any, d: any): any;
  action_actionA(a: any, b: any): any;
  action_actionP(a: any, b: any): any;
  action_fovPoliceBattle(a: any, b: any): any;
  action_actionN(a: any, b: any): any;
  action_actionL(a: any, b: any): any;
  action_buyItem(a: any, b: any, c: any): any;
  action_open(a: any, b: any, c: any): any;
  getLevelDivision(a: any): any;
  getPercent(a: any): any;
  getLevel(a: any, b: any, c: any, d: any): any;
  addExp2(a: any, b: any, c: any, d: any, e: any): any;
  addExp(a: any, b: any, c: any, d: any, e: any): any;
  loseExp(a: any, b: any, c: any, d: any, e: any): any;
  addMoney(a: any, b: any, c: any, d: any, e: any): any;
  removeItem(a: any, b: any, c: any, d: any): any;
  addItem(a: any, b: any, c: any, d: any): any;
  addSkill(a: any, b: any, c: any, d: any, e: any, g: any): any;
  addSkillAction(a: any, b: any, c: any, d: any, e: any, g: any): any;
  removeSkillAction(a: any, b: any, c: any, d: any, e: any): any;
  giftItem(a: any, b: any, c: any, d: any, e: any): any;
  giftItem2(a: any, b: any, c: any, d: any, e: any): any;
  giftItem3(a: any, b: any, c: any, d: any, e: any, g: any): any;
  buyItem(a: any): any;
  buySkill(a: any): any;
  sellItem(a: any): any;
  okuItem(a: any, b: any, c: any, d: any, e: any, g: any, f: any, h: any): any;
  okuItemOkuLog(a: any, b: any, c: any, d: any): void;
  getPickupItemMaxNum(a: any, b: any): any;
  pickupItem(a: any): any;
  addFriendship(a: any, b: any, c: any): any;
  addFame(a: any, b: any, c: any): any;
  addGae(a: any, b: any, c: any): any;
  updateTalkResetTime(a: any): void;
  checkTalkFsp(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  setPlayerPosition(a: any, b: any, c: any): any;
  joinPlayerTeam(a: any, b: any, c: any, d: any, e: any, g: any): any;
  setFukidashi(a: any): any;
  getFspTalkTarget(a: any): any;
  setFukidashiTalk(a: any, b: any): any;
  setCommonFukidashiTalk(a: any, b: any, c: any): any;
  setEmotion(a: any): any;
  removeEmotion(a: any): any;
  removeEquip(a: any): any;
  setEquipFromItem(a: any): any;
  setStatus(a: any): any;
  checkAttack(a: any, b: any): any;
  attack(a: any, b: any, c: any): any;
  longAttack(a: any, b: any, c: any): any;
  usePlayerSkillAction(a: any, b: any, c: any, d: any, e: any, g: any): any;
  isCanAction(a: any, b: any, c: any, d: any, e: any): any;
  isCanUseItem(a: any, b: any): any;
  isCanUseSkillAction(a: any, b: any): any;
  getSkillActionCost2(a: any, b: any): any;
  getSkillActionCost(a: any, b: any): any;
  getCdtBukizokusei(a: any): any;
  getAttackSkillAction(a: any): any;
  getLongAttackSkillAction(a: any): any;
  useSkillAction(a: any, b: any, c: any, d: any, e: any, g: any, f: any, h: any, k: any, l: any, m: any, p: any): any;
  nonBattleAction(a: any, b: any, c: any): any;
  getAptitudeDistance(a: any): any;
  battleAction(a: any, b: any, c: any): any;
  setBattleTarget(a: any): any;
  takeSkillAction(a: any, b: any, c: any, d: any): any;
  getKnockDownExp(a: any, b: any): any;
  isEnableTarget(a: any): any;
  setCondition(a: any, b: any, c: any, d: any, e: any): any;
  removeAllCondition(a: any): any;
  removeCondition(a: any, b: any, c: any): any;
  setAdventurerMap(a: any): void;
  usedItem2(a: any, b: any): any;
  usedItem(a: any, b: any): any;
  getCharactorFsp(a: any, b: any): any;
  getCharactorFame(a: any, b: any): any;
  getCharactorGae(a: any, b: any): any;
  addValue(a: any): any;
  getItemMaxSpace(a: any): any;
  getItemSpace(a: any): any;
  getCharactorMoney(a: any, b: any, c: any): any;
  searchCharactorItem(a: any, b: any): any;
  setCharactorPosition(a: any, b: any): any;
  addLogEffects(a: any, b: any): void;
  getWalkChipset(a: any, b: any): any;
  turnToCharactor(a: any, b: any, c: any, d: any): void;
  isDeath(a: any): any;
  setMoveChipset(a: any): void;
  setTrunToDirection(a: any, b: any, c: any): void;
  setTurnToPosition(a: any, b: any, c: any, d: any): any;
  stepCharactor(a: any): void;
  getCantMoveIdx(a: any, b: any, c: any): any;
  dropItem(a: any, b: any, c: any, d: any): any;
  calDamage(a: any): any;
  autoCure(a: any): void;
  getExp(a: any, b: any, c: any, d: any): any;
  setLevelUpGrowthStatus(a: any, b: any): any;
  addSkillActionExp(a: any, b: any, c: any): any;
  getFriendshipExp(a: any, b: any, c: any): any;
  getFameExp(a: any, b: any): any;
  getGaeExp(a: any, b: any): any;
  tryNpcJoinTeam(a: any): any;
  requestJoinTeam(a: any, b: any): any;
  requestJoinMyMember(a: any, b: any): any;
  isBlockRequestJoin(a: any): any;
  requestRemoveMyTown(a: any, b: any): any;
  requestRemoveMyTeam(a: any, b: any): any;
  requestMyTownBefore(a: any, b: any): any;
  requestMyTown(a: any, b: any): any;
  isEnableRemovePlayerTeam(a: any): any;
  removePlayerTeam_checkQuest(a: any): void;
  removePlayerTeam(a: any, b: any, c: any): any;
  playerBodilyFunctions(a: any): any;
  sleepPlayer(a: any, b: any, c: any): void;
  deathAction(a: any, b: any, c: any, d: any): any;
  deleteChangeMapCharactor(): void;
  timeRevival(a: any): void;
  eventRevival(a: any): any;
  clearMoveMapCondition(a: any): void;
  setHomeMap(a: any, b: any): any;
  gotoHospital(a: any, b: any): void;
  setPoliceMap(a: any): void;
  setSojiyaMap(a: any): void;
  setNoriaiBashaMap(a: any): void;
  setPeddlerMap(a: any): void;
  setCriminalMap(a: any): any;
  setMyTownCharaMap(a: any): void;
  setSubTownCharaMap(a: any): void;
  isFreeCharactor(a: any, b: any): any;
  getFreeCharactors(): any;
  judgeCondition(a: any, b: any, c: any, d: any, e: any, g: any, f: any): any;
  getConditionDefaultValue(a: any, b: any, c: any): any;
  removeOnemapTeam(a: any): void;
  addDeathAction(a: any, b: any, c: any): any;
  clearDeathAction(a: any): void;
  inFlg(a: any, b: any): any;
  setFlg(a: any, b: any): any;
  removeFlg(a: any, b: any): any;
  kantei(a: any): void;
  kantei2(a: any): void;
  kantei3(a: any): void;
  requestEnchantment(a: any, b: any): void;
  requestRustRepair(a: any): void;
  stayInn(a: any): void;
  allkantei(a: any): void;
  allnoroikeshi(a: any): void;
  noroiwotoku(a: any): void;
  noroiwotoku2(a: any): void;
  noroiwotoku3(a: any): void;
  fukkatusaseru(a: any): void;
  hospitalmeibomiru(a: any): void;
  isPlayerTeamMemberSpaceNum(): any;
  isPlayerTeamMemberFull(a: any): any;
  isMyMemberFull(a: any): any;
  getHitRatio(a: any): any;
  getCriticalRatio(a: any): any;
  setActionData(a: any, b: any): any;
  autoEquipment(a: any): any;
  pickupItemFoot(a: any, b: any): any;
  isFavoriteItem(a: any, b: any): any;
  teleportNearCharactor(a: any, b: any, c: any): any;
  getOverlookMessage(a: any): any;
  setEventChara(a: any): any;
  removeEventChara(a: any): any;
  requestKoibito(a: any, b: any): void;
  requestKoibito_act(a: any, b: any): any;
  requestKekkon(a: any, b: any): void;
  requestKekkon_act(a: any, b: any): any;
  viewChestOpenMessage(a: any): any;
  npcGrowth(a: any): any;
  removeNpcCharactor(): void;
  fillNpcCharactor(): void;
  criminalBattle(a: any): any;
  jobChange(a: any, b: any, c: any): any;
  getTalkHomeMap(a: any): any;
  getHomeMap(a: any): any;
  getMemberSumSkillLevel(a: any, b: any): any;
  fovBattlePolice(): any;
  pushCharaPosition(a: any, b: any, c: any, d: any, e: any, g: any): any;
  getCharactorCantPositionIdx(a: any, b: any): any;
  nakanaorishiyo(a: any, b: any): any;
  getAttackDamageAction(a: any, b: any, c: any): any;
  getAttackKaihiAction(a: any, b: any, c: any): any;
  isDyingValue(a: any, b: any): any;
  updatePoliceRelation(): void;
  setFovPoliceBattle(a: any): any;
  getCharactorItemInfo(a: any, b: any): any;
  getShopMinMoney(a: any): any;
  updateAllEquipment(): void;
  setAutoEquipment(a: any): any;
  getJakutaiLevel(a: any): any;
  isExpHakiMask(a: any): any;
  getJobRandomActionSkill(a: any): any;
  oneActionFinishAction(a: any, b: any, c: any): void;
  oneActionFinishAction_criminalaround(a: any, b: any): any;
  convertName(a: any): any;
  getActionMyMembers(a: any, b: any): any;
  getShopRankScale(a: any): any;
  updateShopRankScale(a: any, b: any): any;
  addFirstMoney(a: any, b: any): void;
  addFirstItem(a: any): void;
  isStealCondition(a: any): any;
  isEnableNakanaori(a: any): any;
  addFriendshipLog(a: any, b: any, c: any): void;
  addFameLog(a: any, b: any, c: any): void;
  addGaeLog(a: any, b: any, c: any): void;
  addLevelUpBonus(a: any): void;
  specialAffect(a: any, b: any): any;
  actEventTeamRemove(a: any): any;
  checkEventTeamRemove(a: any, b: any): void;
  removeLongStayCharactors(a: any): void;
  getTargetItem(a: any, b: any, c: any): any;
  getTargetItem2(a: any, b: any): any;
  chikakuShisetsu(a: any, b: any): void;
  timeHungry(a: any, b: any, c: any): void;
  viewNpcJoinTeamMessage(a: any, b: any, c: any): void;
  setAroundPosition(a: any, b: any): any;
  isAkumu(a: any): any;
  viewLineEffect(a: any, b: any, c: any): any;
  getFukkatsuPrice(a: any, b: any, c: any): any;
  getFukkatsuPrice2(a: any): any;
  setZentaishiji(a: any, b: any, c: any, d: any): any;
  specialAffect_bokenshadoko(a: any, b: any): any;
  getActionTurnShohi(a: any, b: any, c: any): any;
  setRemoveNonActionConditionValue(a: any): void;
  checkAroundBed(a: any): void;
  addHojuCharactor(a: any, b: any): any;
  getCharactorObjects(a: any, b: any): any;
  hoju(a: any): void;
  hojuCriminalCharactor(): any;
  shojiItemKasane(a: any, b: any): any;
  kojikiKaiwa(a: any, b: any): void;
  ketugoHogyokus(a: any): any;
  recipeAutoUse(a: any): any;
  getMytownNokoriNum(): any;
  getMySumNum(): any;
  getMymemberiNum(a: any): any;
  skillNarau(a: any): any;
  allBattleReset(): any;
  setPlayerItemRecord(a: any): void;
  setPlayerItemRecordFromEquipment(): void;
  changeHmapType(a: any): any;
  getHajimarinochiKanteiPrice(): any;
  removeNakamaFuyouDeathAction(a: any): void;
  fixDoreiMonsterMoney(): void;
  fixSkillActionID(): void;
  addZokuseiFuyo(a: any, b: any, c: any): any;
  viewMap_fix(a: any): void;
  fixTeam(): void;
  clearFukidashiAll(): void;
  checkReuseItem(a: any, b: any): any;
  getReuseItemMinutes(a: any, b: any): any;
  setReuseItem(a: any, b: any, c: any): void;
  refreshItemReuseTime(): void;
  getRyouriFromFukuro(a: any): any;
  ryourifukurokure(a: any): void;
  shokuzaifukurokure(a: any): void;
  autoTownFacilityUse(a: any): void;
  autoTownFacilityUse_kantei(a: any): any;
  autoTownFacilityUse_noroikeshi(a: any): any;
  autoTownFacilityUse_rustrepair(a: any): any;
  autoTownFacilityUse__targetChara(a: any, b: any, c: any): any;
  getEquipmentIds(a: any, b: any): any;
  birthdayLog(a: any): void;
}

declare class tGameCharactorData {
  parent: any;
  characotrData: any;
  allocateStatusData: any;
  allocateStatusVals: any;
  allocateStatusIdxs: any;
  randomEnemySheet: any;
  randomBossSheets: any;
  randomSlaveSheet: any;
  randomRaceEnemySheet: any;
  randomRaceBossSheets: any;
  skillExpRange: any;
  elv: any;
  elv2: any;
  belv: any;
  belv2: any;
  init(c: any): void;
  initLoad(c: any): void;
  setLevel(c: any, b: any): void;
  isHiddenStatus(c: any): any;
  getCharactorData(c: any, b: any, f: any, d: any, a: any): any;
  getSkillName(c: any): any;
  getItem(c: any, b: any, f: any): any;
  setEquipment(c: any, b: any, f: any, d: any, a: any, e: any): any;
  getLevelToRank(c: any, b: any, f: any): any;
  getRankToLevel(c: any): any;
  setEquipment_quality(c: any, b: any): void;
  setEquipment_weapons(c: any, b: any, f: any, d: any, a: any): any;
  setEquipment_lweapons(c: any, b: any, f: any, d: any, a: any): any;
  setEquipment_armors(c: any, b: any, f: any, d: any, a: any): any;
  setRandomEnemySheet(): void;
  setRandomRaceEnemySheet(): void;
  setRandomBossSheet(): void;
  setRandomRaceBossSheet(): void;
  setRandomSlaveSheet(): void;
  createRandomEnemy(c: any): any;
  createRandomRaceEnemy(c: any): any;
  getRandomBossId2(c: any, b: any, f: any): any;
  getRandomBossId(c: any, b: any): any;
  createRandomSlaveId(c: any): any;
  getAllocateStatusSheet(c: any): any;
  setAllocateStatusTargetLevel(c: any): any;
  setAllocateStatusRandom(c: any, b: any): any;
  getAllocateStatusGetPoint(c: any): any;
  setSkills(c: any, b: any, f: any): any;
  setAskills(c: any, b: any, f: any, d: any, a: any): any;
  convertTypeToQuality(c: any): any;
  convertTypeToTarget(c: any): any;
  getJobBaseStatus(c: any): any;
  getFavoriteItems(): any;
  convertActionSkillLevel(c: any): void;
  setSpecialEquipment(c: any): any;
  getRaceNums(c: any): any;
}

declare class tGameCharactorEquipRuleWindow {
  parent: any;
  viewData: any;
  init(b: any): void;
  viewCharactorRuleWindow(b: any, a: any): void;
}

declare class tGameCharactorRuleWindow {
  parent: any;
  viewData: any;
  init(b: any): void;
  viewCharactorRuleWindow(b: any, a: any): void;
  viewCharactorRule2Window(b: any, a: any): void;
  viewCharactorRule3Window(b: any, a: any): void;
  getCharaRule_townruleKantei(b: any): any;
  getCharaRule_townruleNoroikeshi(b: any): any;
  getCharaRule_townruleRustrepair(b: any): any;
  getCharaRule_usenoroiitem(b: any): any;
}

declare class tGameChikaMakyo {
  parent: any;
  init(a: any): void;
  refreshDungeon(): any;
  createDungeon(a: any): any;
  createChikaMakyo(a: any, c: any): any;
  firstGmAccess(a: any): void;
  setMaxFloor(a: any): void;
  resultGmAccess(a: any): void;
  createDungeonFloorEnd(a: any, c: any): any;
  getHoshuConvert(a: any): any;
}

declare class tGameChipsetResource {
  parent: any;
  chipsetLink: any;
  chipsetData: any;
  counters: any;
  init(c: any): void;
  getUseData(c: any): any;
  getUseDataFromMap(c: any): any;
  loadImage(c: any, d: any, b: any): void;
  loadLinkJson(c: any): void;
  loadAllImage(c: any): void;
  getChipsetData(c: any): any;
  getMyAdventurerChipData(c: any): any;
}

declare class tGameCommand {
  parent: any;
  init(a: any): void;
}

declare class tGameCooking {
  parent: any;
  viewData: any;
  init(c: any): void;
  initLoad(c: any): void;
  cooking(c: any, b: any, d: any): void;
  cookingMember(c: any, b: any, d: any): void;
  selectFood(c: any): void;
  selectCmr(c: any): void;
  getSuccessRate(c: any, b: any): any;
  actCooking(): void;
  cookResult(c: any, b: any): any;
  getExp(c: any, b: any, d: any): any;
  selectNum(c: any): any;
  viewOutdoor(c: any): void;
}

declare class tGameCreateCharactor {
  parent: any;
  viewData: any;
  data: any;
  init(b: any): void;
  initLoad(b: any): void;
  view(b: any, a: any): void;
  changeView(b: any, a: any): void;
  viewProfile(): void;
  viewProfile2(): void;
  viewJob(): void;
  viewBonus(): void;
  viewConfirm(b: any): void;
  updateCharaData(b: any): void;
  cancelConfirm(): void;
  viewBuyWindow(b: any): void;
}

declare class tGameCreateUniqueCharactor {
  parent: any;
  init(a: any): void;
  addCharactors(): any;
  addMegamiCharactor(a: any): any;
  addShushin1Charactor(a: any): any;
  addShushin2Charactor(a: any): any;
  addYushaCharactor(a: any): any;
  addElfSisterCharactor(a: any): any;
  addElfBrotherCharactor(a: any): any;
  addKenkyujoShochoCharactor(a: any): any;
  addMagicalGirlCharactor(a: any): any;
  addMagicalGirl2Charactor(a: any): any;
  addJiiCharactor(a: any): any;
  addMikohimeCharactor(a: any): any;
  addOshitsukeCharactor(a: any): any;
}

declare class tGameCreateWindow {
  parent: any;
  viewData: any;
  init(c: any): void;
  viewCreateWindowWithMember(c: any, a: any): void;
  viewCreateWindow(c: any, a: any): void;
  isCreate(c: any, a: any, d: any): any;
  viewBottomData(c: any): void;
  getSuccessRate(c: any): any;
  actCreate(): void;
  createResult(c: any, a: any): any;
  getExp(c: any, a: any, d: any): any;
}

declare class tGameCriminalWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewCharaMaxNum: any;
  cursor: any;
  init(b: any): void;
  initLoad(b: any): void;
  clear(): void;
  viewWindow(b: any, e: any): any;
  drawPage(b: any): void;
  getCursor(b: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
  setCursor(b: any): any;
  viewInfoWindow(b: any): any;
}

declare class tGameDairyQuest {
  parent: any;
  init(e: any): void;
  tryRefresh(): any;
  refreshQuest(): void;
  createQuest(e: any, f: any): void;
  viewWindow(e: any, f: any): any;
  getWindowData(e: any, f: any): any;
  addCount(e: any, f: any): any;
}

declare class tGameData {
  parent: any;
  masterData: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  initData(a: any): any;
  getDataFlg(a: any): any;
  setDataFlg(a: any, b: any): any;
  getDataValue(a: any, b: any): any;
  setDataValue(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initFirstDatas(a: any, b: any, c: any): void;
  addPlayerGiftInfo(a: any): void;
}

declare class tGameDesignedMap {
  parent: any;
  data: any;
  init(d: any): void;
  initLoad(d: any): void;
  loadMapJs(d: any, c: any): void;
  addInitMaps(d: any, c: any): void;
  addTargetMap(d: any, c: any, h: any, e: any): void;
  addInitMaps_etc(d: any, c: any): any;
  getTargetChipsetPosition(d: any, c: any, h: any): any;
  autoCreateExpand(d: any, c: any, h: any, e: any): any;
}

declare class tGameDungeonGenerator {
  parent: any;
  bossFloors: any;
  init(c: any): void;
  getBaseAttr(): any;
  getAppearAttr(): any;
  convertData(c: any): any;
  createDungeonName(c: any, l: any): any;
  getDungeonNameFromDungeonData(c: any, l: any, e: any, a: any): any;
  getDungeonName(c: any, l: any, e: any, a: any, d: any): any;
  getKaidanObjectId(c: any, l: any): any;
  createEntrance(c: any, l: any): void;
  createBossFloor(c: any, l: any): any;
  setEntranceEventData(c: any, l: any): void;
  setRoad(c: any): any;
  jumpDungeonFloor(c: any, l: any, e: any, a: any, d: any, b: any): any;
  nextDungeonFloor(c: any, l: any, e: any, a: any, d: any): any;
  prevDungeonFloor(c: any, l: any, e: any, a: any, d: any): any;
  checkEmptyPosition(c: any, l: any): any;
  createFloor(c: any, l: any): any;
  isCloseRoom(c: any, l: any): any;
  createFloor_field(c: any, l: any): any;
  createFloor_maze(c: any, l: any): any;
  createFloor_long(c: any, l: any): any;
  setMonstorHouse(c: any, l: any, e: any, a: any, d: any): void;
  setRestRoom(c: any, l: any, e: any, a: any, d: any): void;
  setHogyokuRoom(c: any, l: any, e: any, a: any, d: any): void;
  setFishingRoom(c: any, l: any, e: any, a: any, d: any): void;
  setOtakaraRoom(c: any, l: any, e: any, a: any, d: any): void;
  setShopRoom(c: any, l: any, e: any, a: any): any;
  getRectSpace(c: any, l: any): any;
  getRectSpace2(c: any, l: any): any;
  getRectSpace2FreeSpace(c: any, l: any): any;
  selectItemType(c: any): any;
  getFloorItemRank(c: any): any;
  setDungeonItem(c: any, l: any, e: any, a: any): any;
  setDungeonPortalEdgeAction(c: any, l: any, e: any): any;
  setDungeonChest(c: any, l: any, e: any, a: any): any;
  setDungeonMonsterChest(c: any, l: any, e: any, a: any): any;
  setDungeonHibi(c: any, l: any, e: any, a: any): any;
  setDungeonTrap(c: any, l: any, e: any, a: any): any;
  setDungeonGoodTrap(c: any, l: any, e: any, a: any): any;
  setDungeonJumpTrap(c: any, l: any, e: any, a: any): any;
  setDungeonEnemy(c: any, l: any, e: any, a: any, d: any, b: any, k: any): any;
  setDungeonMaterial(c: any, l: any, e: any, a: any): any;
  setDungeonObject(c: any, l: any, e: any): any;
  setDungeonCantMoveFloor(c: any, l: any, e: any, a: any, d: any, b: any): any;
  setDungeonCanMoveFloor(c: any, l: any, e: any, a: any, d: any, b: any): any;
  setDungeonDamageFloor(c: any, l: any, e: any, a: any, d: any): any;
  setDungeonAdventurerCharactor(c: any, l: any, e: any, a: any): any;
  setDungeonCriminalCharactor(c: any, l: any, e: any, a: any): any;
  oneActionFinishAction(c: any, l: any, e: any): void;
  oneActionFinishAction_crdungeonteleport(c: any, l: any): any;
  oneActionFinishAction_monsterhouse(c: any, l: any): any;
  oneActionFinishAction_dungeonautocdt(c: any, l: any): any;
  oneActionFinishAction_crdungeon3turn(c: any, l: any): void;
  oneActionFinishAction_yatoboss(c: any, l: any): any;
  oneActionFinishAction_crdungeon3boss(c: any, l: any): any;
  oneActionFinishAction_crdungeon7boss(c: any, l: any): any;
  oneActionFinishAction_crdungeon7boss_bosshp(c: any, l: any): any;
  oneActionFinishAction_bossgekiha(c: any, l: any): any;
  bossgekihaEvent(c: any, l: any): void;
  isEnableSetObject(c: any, l: any, e: any, a: any): any;
  isEnableSetObject2(c: any, l: any, e: any): any;
  getMapGimmickFloorInfo(c: any, l: any, e: any, a: any, d: any): any;
  getMapGimmickSpace(c: any, l: any, e: any): any;
  setDungeonTypeMap(c: any, l: any, e: any, a: any, d: any): any;
  viewInfoWindow(c: any, l: any): any;
  viewViewMapFukidashi(): void;
  createSaveFloor(c: any, l: any): any;
  createSaveJumpEscFloor(c: any, l: any): any;
  changeMap(c: any): void;
  getBassgekihaHoushu(c: any): void;
  setAutoCdt(c: any, l: any): any;
  setSpecialEvent(c: any, l: any): any;
  setDungeonEnemy_god2dungeon2(c: any, l: any, e: any, a: any, d: any, b: any): any;
  addTargetDungeon(c: any, l: any, e: any, a: any): void;
  loadDungeonJs(c: any, l: any): void;
}

declare class tGameEditMember {
  parent: any;
  hiddenCanvases: any;
  init(d: any): void;
  view(d: any): any;
  viewConfirm(d: any): void;
}

declare class tGameEffect {
  parent: any;
  effectLink: any;
  effectData: any;
  canvases: any;
  effectTextPositionHistories: any;
  aY: any;
  init(e: any): void;
  initLoad(e: any): void;
  addEffect(e: any): any;
  frameActionDraw(e: any): void;
  draw(e: any): any;
  drawEffectMap(e: any, k: any, g: any): any;
  effectSimple(e: any, k: any): any;
  effectBottomText(e: any, k: any): any;
  getEffectTextDelay(e: any): any;
  effectText(e: any, k: any): any;
  effectSmallText(e: any, k: any): any;
  viewMapName(e: any, k: any): any;
  clear(): void;
  effectDeath(e: any, k: any): any;
  effectVanish(e: any, k: any): any;
  effectUpObject(e: any, k: any): any;
  effectSimpleCut(e: any): any;
  effectLine(e: any, k: any): any;
  viewBigText(e: any, k: any): any;
}

declare class tGameEmotionResource {
  parent: any;
  emotionLink: any;
  init(a: any): void;
  initLoad(a: any): void;
  getEmotionData(a: any): any;
}

declare class tGameEnchantment {
  parent: any;
  viewData: any;
  init(d: any): void;
  fromEquipment(d: any, b: any, f: any, a: any): void;
  fromMaterial(d: any, b: any, f: any, a: any): void;
  fromEquipmentMember(d: any, b: any, f: any, a: any): void;
  fromMaterialMember(d: any, b: any, f: any, a: any): void;
  getCanEnchantmentNum(d: any): any;
  getUsedEnchantmentNum(d: any): any;
  isCanEnchantmentPair(d: any, b: any): any;
  getPrice(d: any, b: any, f: any, a: any): any;
  selectEquipment(d: any, b: any): void;
  selectMaterial(d: any, b: any): void;
  getItemIndex(d: any, b: any): any;
  getSuccessRate(d: any, b: any): any;
  actEnchantment(): void;
  requestEnchantment(): void;
  enchantmentResult(d: any, b: any): any;
  getExp(d: any, b: any, f: any): any;
  rmvEquipment(d: any, b: any): void;
}

declare class tGameEnsei {
  parent: any;
  nextUpdateTime: any;
  bokenshaMaxLevel: any;
  init(b: any): void;
  updateKouho(): any;
  convertItem(b: any): any;
  viewWindow(b: any): void;
  createEnseiField(b: any, a: any): void;
  createKyoten(b: any, a: any): any;
  createBoukensha(b: any, a: any, c: any): void;
  createDungeon(b: any, a: any, c: any): any;
  deleteEnseiData(): any;
  backToHome(b: any): void;
  enseiExit(b: any): any;
}

declare class tGameEquipRankup {
  parent: any;
  viewData: any;
  init(d: any): void;
  getAddRank(): any;
  getMaxRank(d: any): any;
  getRankupRequireMaterials(d: any): any;
  fromEquipment(d: any, a: any, f: any, e: any): void;
  fromEquipmentMember(d: any, a: any, f: any, e: any): void;
  getCanEquipRankup(d: any): any;
  selectEquipment(d: any, a: any): void;
  getItemIndex(d: any, a: any): any;
  getSuccessRate(d: any): any;
  actEquipRankup(): void;
  equiprankupResult(d: any, a: any): any;
  getExp(d: any, a: any, f: any): any;
  viewBottomData(d: any): any;
  isCreate(d: any, a: any, f: any): any;
}

declare class tGameEquipmentWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  labelFontSize: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  equipTypes: any;
  init(a: any): void;
  viewEquipmentWindow(a: any, d: any): any;
  drawObject(): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  viewEquipmentWindowContinue(): void;
  selectItem(): void;
  viewEquipHikaku(a: any, d: any): any;
}

declare class tGameEtc {
  parent: any;
  linkData: any;
  data: any;
  images: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initLoad(a: any): void;
  loadAllImage(a: any): void;
  loadImage(a: any, c: any): void;
}

declare class tGameEtcTown {
  parent: any;
  init(a: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
}

declare class tGameEvent {
  parent: any;
  eventDatas: any;
  init(a: any): void;
  loadEvent(a: any, b: any): any;
  eventAffectCharactor(a: any, b: any, d: any): void;
  checkChangeMapEvent(): void;
  changeMapEvent(a: any, b: any): void;
  addAffectNonBattleAnswers(a: any): void;
  addAffectNonBattleAnswers_kenkyu(a: any): void;
  addAffectNonBattleAnswers_magicalgirl(a: any): void;
  knockDown(a: any, b: any, d: any): void;
  viewMap(a: any): void;
  dropItem(a: any): void;
  oneActionFinishAction(a: any, b: any, d: any): void;
  revivalEventCharas(a: any): any;
}

declare class tGameEventAnimation {
  parent: any;
  animationData: any;
  moveSpeed: any;
  init(a: any): void;
  animation(a: any, c: any): void;
  convertAnimationData_chara(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  convertRouteToMove(a: any): any;
}

declare class tGameEventFrame {
  parent: any;
  hiddenCanvases: any;
  viewData: any;
  init(a: any): void;
  view(a: any, b: any): any;
  addCharactor(a: any): any;
  removeCharactor(a: any): any;
  destory(a: any): void;
  viewMap(a: any, b: any): void;
  backMap(a: any, b: any, c: any): void;
  backGotoMap(a: any, b: any): void;
  backMapAct(a: any): void;
  backGotoMapAct(a: any): void;
  viewOutAnimation(a: any, b: any): void;
  viewInAnimation(a: any, b: any): void;
}

declare class tGameExMapData {
  parent: any;
  version: any;
  importData: any;
  init(e: any): void;
  exportMapData(e: any, b: any): void;
  createOutputMapData(e: any, b: any): void;
  importMapData(e: any, b: any): void;
  clearImportMapDataFile(e: any): void;
  selectedImportMapDataFile(e: any): any;
  selectedImportMapDataFileCommon(e: any, b: any, c: any): void;
}

declare class tGameFaceResource {
  parent: any;
  size: any;
  faceLink: any;
  faceData: any;
  init(a: any): void;
  getSomeFace(a: any): any;
  getFace(a: any): any;
  getChipsetFace(a: any): any;
  loadImage(a: any, c: any, d: any): void;
  loadAllImage(a: any): void;
  loadLinkJson(a: any): void;
  getRandomCharactor(a: any, c: any, d: any, b: any, e: any, k: any): any;
  getRandomObjectId(a: any): any;
  getRandomFaceId(a: any): any;
}

declare class tGameFaith {
  parent: any;
  init(b: any): void;
  addTownFaith(b: any): any;
  getRivalCharas(): any;
  getBossChara(b: any): any;
  maoushutsugen(b: any, f: any): void;
  updateMaouAction(): void;
  updateMaouTimeOver(b: any, f: any): void;
  updateRivalAction(): void;
  updateTownsConnect(b: any): void;
  isHendo(): any;
  createFaithLowDungeon(): any;
  createStartFloor(b: any, f: any): any;
  createHaikaiFloor(b: any, f: any): any;
  createSuiminFloor(b: any, f: any): any;
  setRandomHone(b: any, f: any): void;
  oneActionFinishAction(b: any, f: any, a: any): void;
  oneActionFinishAction_faithlowhaikaichikai(b: any, f: any): void;
  viewShuki(b: any, f: any): void;
  createOtasuke(b: any, f: any, a: any): any;
  createBossFloor(b: any, f: any): any;
  bossEvent(b: any): void;
  oneActionFinishAction_faithlowbossgekiha(b: any, f: any): any;
  removeHone(): void;
  clearTargetFaith(b: any, f: any): any;
  shukka(b: any): void;
  viewFaithHoshu(b: any, f: any): void;
}

declare class tGameFaithWindow {
  parent: any;
  textMaxWidth: any;
  fontSize: any;
  textSpace: any;
  ccvs: any;
  cctx: any;
  init(h: any): void;
  clearCanvas(): void;
  view(h: any, B: any): any;
}

declare class tGameFarm {
  parent: any;
  farmData: any;
  init(b: any): void;
  initLoad(b: any): void;
  loadFarm(b: any): void;
  createObject(b: any): any;
  checkGrow(b: any): any;
  getExp(b: any, c: any, d: any): any;
  updateWaterAll(b: any): any;
  updateFarmObjects(b: any, c: any): void;
  isWaterWeather(b: any): any;
}

declare class tGameFieldGenerator {
  parent: any;
  csize: any;
  fieldEventData: any;
  init(b: any): void;
  createMainField(b: any, a: any): void;
  createFieldWithLoad(b: any, a: any): void;
  dungeonAreasIndex(b: any, a: any): any;
  createField(b: any, a: any): void;
  setSpreadChipset(b: any, a: any, d: any, e: any, c: any, f: any): void;
  setRandomSpreadChipset(b: any): any;
  getDungeonAreas(b: any): any;
  getRandomTownPositions(b: any): any;
  getRandomFreePositions(b: any): any;
  inTown(b: any, a: any, d: any): any;
  inSlum(b: any, a: any, d: any): any;
  inMyTown(b: any, a: any, d: any): any;
  inSubTown(b: any, a: any, d: any): any;
  inNouchi(b: any, a: any, d: any): any;
  inSchool(b: any, a: any, d: any): any;
  inCastle(b: any, a: any, d: any): any;
  inEtcTown(b: any, a: any, d: any): any;
  inDungeon(b: any, a: any, d: any, e: any): any;
  inDungeonFloor1(b: any, a: any, d: any, e: any): any;
  inMaterial(b: any, a: any, d: any): void;
  updateAllField(): void;
  autoCreateTown(b: any, a: any, d: any, e: any): void;
  autoCreateSchool(b: any, a: any, d: any, e: any): void;
  autoCreateCastle(b: any, a: any, d: any, e: any): void;
  autoCreateSlum(b: any, a: any, d: any, e: any): void;
  autoCreateDungeon(b: any, a: any): void;
  getRandomDungeonType(b: any): any;
  createDungeon(b: any): any;
  inQuest1(b: any, a: any, d: any): any;
  inQuest9(b: any, a: any, d: any): any;
  inQuest10(b: any, a: any, d: any): any;
  inQuest12(b: any, a: any, d: any): any;
  searchTargetObject(b: any, a: any): any;
  initFieldEvent(b: any): void;
  checkMoveEvent(b: any): any;
  checkTalkBossArea(b: any): any;
  checkMoveEventForce(b: any): any;
  getPlayerPositionChipsetInfo(): any;
  getTargetPositionOnemapId(b: any, a: any): any;
  getPlayerPositionOnemapId(): any;
  emenyEncount(b: any): any;
  questEnemyEncount(b: any, a: any): any;
  peddlerEncount(b: any): any;
  slavetraderEncount(b: any): any;
  rescueEncount(b: any): any;
  escortEncount(b: any): any;
  restEncount(b: any, a: any, d: any, e: any): any;
  kanteiEncount(b: any): any;
  seishokushaEncount(b: any): any;
  viewFieldMapAction(b: any): void;
  choiseRescueCharactor(): any;
  choiseEscortCharactor(): any;
  clearEncountData(b: any): any;
  criminalEncount(b: any, a: any): any;
  viewMapCustomMenu(b: any): any;
  refreshDungeons(b: any): any;
  refreshDungeons2(b: any, a: any): any;
  refreshTowns(b: any): any;
  refreshSchools(b: any): any;
  refreshCastles(b: any): any;
  refreshSlums(b: any): any;
  oneActionFinishAction(b: any, a: any, d: any): void;
  oneActionFinishAction_checkfaithlow(b: any, a: any): any;
  oneActionFinishAction_faithlowdungeonfirst(b: any, a: any): void;
  oneActionFinishAction_maoushutsugen(b: any, a: any): any;
  oneActionFinishAction_bossareabossgekiha(b: any, a: any): any;
  oneActionFinishAction_bossareaenemygekiha(b: any, a: any): any;
  oneActionFinishAction_osoudeath(b: any, a: any): any;
  isMaouArea(b: any, a: any): any;
  inMaou(b: any, a: any, d: any, e: any): any;
  getTargetMap(b: any): any;
  inTargetMap(b: any, a: any): any;
  getMapName(b: any, a: any): any;
  setMaouTeshitaShutugen(b: any, a: any, d: any): void;
  createBuilding(b: any, a: any, d: any): void;
  expandMap(b: any, a: any): any;
  createFirstMap(b: any): void;
  getRangeMap(b: any): any;
  getKakuchoFame(b: any): any;
  viewFieldHenkaWindow(b: any): void;
  shokinkubidaEncount(b: any): any;
  getFieldHenkaBottomData(): any;
  createKodaiiseki(b: any, a: any): any;
  updateBossArea(b: any): any;
  bossAreaEncount(b: any): any;
  bossAreaEncount_boss(b: any, a: any, d: any, e: any): any;
  bossAreaEncount_enemy(b: any, a: any, d: any, e: any): any;
  viewBossareaBoard(b: any, a: any): any;
  refreshFaith(b: any): any;
  shukeiFaith(b: any, a: any, d: any): any;
  addMapTarget(b: any, a: any): any;
  removeMapTarget(b: any, a: any): any;
  clearConditionViewField(b: any): any;
  setKojiki(b: any): void;
  setOsouDeathAction(b: any): void;
  fieldCreateRoad(b: any): any;
  fixInEtcTown_hogyokuketsugo(b: any): void;
}

declare class tGameFieldMaterial {
  parent: any;
  init(a: any): void;
  autoCreate(a: any): void;
  getName(a: any, g: any): any;
  createSpot(a: any, g: any): any;
  convertData(a: any): any;
  createSaikutsujo(a: any, g: any): any;
  createSaishujo(a: any, g: any): any;
  createHoujou(a: any, g: any): any;
  isEnableSetObject(a: any, g: any, b: any): any;
  getFreeSpace(a: any): any;
  inMaterial(a: any, g: any, b: any): any;
  changeMap(a: any): void;
}

declare class tGameFishing {
  parent: any;
  data: any;
  img: any;
  viewData: any;
  size: any;
  skillId: any;
  init(a: any): void;
  getSp(a: any, b: any): any;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  view(a: any): any;
  setFishData(): void;
  clear(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  addTime(a: any): void;
  getExp(a: any, b: any, e: any): any;
}

declare class tGameFukidashiResource {
  parent: any;
  fukidashiLink: any;
  cvs: any;
  ctx: any;
  init(b: any): void;
  initLoad(b: any): void;
  createFukidashi(b: any): any;
}

declare class tGameFullscreenLog {
  parent: any;
  callBack: any;
  init(a: any): void;
  view(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawCanvas(): any;
}

declare class tGameGameClear {
  parent: any;
  viewData: any;
  init(a: any): void;
  checkClearFlg(): void;
  checkFirst(): void;
  setClearDungeon(): any;
  setClearEtc(): any;
}

declare class tGameGameOptionWindow {
  parent: any;
  viewData: any;
  init(b: any): void;
  viewOptionWindow(b: any, a: any): void;
}

declare class tGameGameOver {
  parent: any;
  viewData: any;
  init(a: any): void;
  setLastInTown(a: any): any;
  view(): void;
  setPenalty(): void;
  revival(): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  gameClose(): void;
}

declare class tGameGamePad {
  parent: any;
  isEnableGamePad: any;
  targetGamePadIndex: any;
  keymapData: any;
  pressedButtons: any;
  isBlock: any;
  init(): void;
  frameAction(b: any): void;
  calKey(): void;
  loadKeyMap(b: any): void;
  clearPressKeys(): void;
  isPressedButton(b: any): any;
  setBlock(b: any): void;
  refreshKeyMap(): any;
}

declare class tGameGamePadBase {
  parent: any;
  isEnableGamePad: any;
  targetGamePadIndex: any;
  pressedButtons: any;
  simplePressKeys: any;
  pressKeyLimitTime: any;
  pressKeyClickTime: any;
  pressKeyDoubleClickTime: any;
  pressKeyPressTime: any;
  longPressKeyPressTime: any;
  pressKeys: any;
  isBlock: any;
  init(): void;
  frameAction(a: any): void;
  calKey(): void;
  sendKeyDown(a: any): void;
  sendKeyUp(a: any): void;
  clearPressKeys(): void;
  isDown(a: any): any;
  isDoubleDown(a: any): any;
  isClick(a: any): any;
  isDoubleClick(a: any): any;
  isPress(a: any): any;
  isDoublePress(a: any): any;
  isLongPress(a: any): any;
  setBlock(a: any): void;
}

declare class tGameGamePadEditor {
  parent: any;
  objs: any;
  isInit: any;
  viewData: any;
  gamepadSvgSize: any;
  buttons: any;
  l2r2Data: any;
  init(): void;
  initFrame(b: any): void;
  viewKeyEditWindow(b: any): void;
  viewPressButtonWindow(b: any): void;
}

declare class tGameGod {
  parent: any;
  init(d: any): void;
  viewMapWarikomi(d: any): void;
  getCastleEventData(d: any): any;
  viewMapWarikomiAction(d: any, a: any, c: any): void;
  viewMapWarikomiAction_godtoujou(d: any, a: any): void;
  viewMapWarikomiAction_godcastle1(d: any, a: any): void;
  viewMapWarikomiAction_godcastle2(d: any, a: any): void;
  viewMapWarikomiAction_godfaith1(d: any, a: any): void;
  viewMapWarikomiAction_godmonderu(d: any, a: any): void;
  viewMapWarikomiAction_monderu2(d: any, a: any): void;
  viewMapWarikomiAction_clear3towers(d: any, a: any): void;
  viewMapWarikomiAction_megamigekihafield(d: any, a: any): void;
  viewMapWarikomiAction_god2_tojo(d: any, a: any): void;
  viewMapWarikomiAction_god2_junbiok(d: any, a: any): void;
  viewMapWarikomiAction_god2_lasthe(d: any, a: any): void;
  checkOverwriteBossFloor(d: any, a: any): any;
  oneActionFinishAction(d: any, a: any, c: any): void;
  talkDungeonBoss(d: any, a: any, c: any): any;
  viewMap(d: any): void;
  oneActionFinishAction_nuebattlechecktimeout(d: any, a: any): any;
  autoCreateExpand(d: any, a: any, c: any, e: any): void;
  getDungeonRandomPos(d: any): any;
}

declare class tGameGoodTrap {
  parent: any;
  init(b: any): void;
  convertData(b: any): any;
  getTrapToObject(b: any, c: any): any;
  getTrapObjectId(b: any): any;
  getTrapName(b: any): any;
  oneActionTrap(b: any): any;
  affect(b: any): any;
  runTrap(b: any, c: any): any;
  tryBreak(b: any): void;
}

declare class tGameGuide {
  parent: any;
  init(a: any): void;
  checkChangeMapGuideEvent(): void;
  checkMoveGuideEvent(a: any): any;
  checkAffectObjectGuideEvent(a: any, d: any): any;
  checkElfdungeonJoinEvent(a: any, d: any): any;
  checkMagicalGirlAuEvent(a: any, d: any): any;
  changeMapEvent(a: any, d: any): void;
  gameStartEvent(a: any, d: any): any;
  checkMaouShutsugenEvent(a: any, d: any): any;
}

declare class tGameHelp {
  parent: any;
  data: any;
  itemlink: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  hcvs: any;
  hctx: any;
  iframe: any;
  iframeOver: any;
  hpcvs: any;
  hpctx: any;
  fontSize: any;
  textSpace: any;
  viewDocumentData: any;
  viewItemMaxNum: any;
  cursor: any;
  init(k: any): void;
  initLoad(k: any): void;
  viewHelp(k: any): void;
  viewCategoryWindow(k: any, n: any): void;
  viewCategoryItemWindow(k: any, n: any, d: any): void;
  viewSelectWindow(k: any, n: any, d: any, r: any): any;
  getCategories(): any;
  getCategoryItems(k: any): any;
  viewDocument(k: any, n: any): any;
}

declare class tGameHikitsugi {
  parent: any;
  version: any;
  init(c: any): void;
  getHikitsugiData(c: any): any;
  setHikitsugiData(c: any): any;
  getStorage(): any;
  getSozaifukuro(): any;
  getShokuzaifukuro(): any;
  getRyourifukuro(): any;
  getActionSkills(c: any, a: any): any;
  getSkills(c: any): any;
  getGift(): any;
  getRecipe(): any;
  getMapEditor(): any;
  getItemRecord(): any;
  setWindow(c: any): void;
  save(c: any, a: any): void;
  load(c: any): void;
}

declare class tGameHikitsugiNakama {
  parent: any;
  max: any;
  version: any;
  myData: any;
  init(f: any): void;
  initLoad(f: any): void;
  initData(): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(f: any): any;
  save(f: any): void;
  load(f: any): void;
  getLocalStorageData(f: any): void;
  setWindow(f: any): void;
  view(f: any): void;
  convertChara2Data(f: any): any;
  viewYobidasu(f: any): void;
  getItemDescription(f: any, a: any): any;
}

declare class tGameHikyo {
  parent: any;
  init(d: any): void;
  initLoad(d: any): void;
  loadLinkJson(d: any): void;
  setHikyoDummyObjects(d: any): any;
  setHikyoDummyObjects_act(d: any, e: any): any;
  hakken(d: any, e: any): any;
  matakita(d: any, e: any): void;
  drawHikyo(d: any, e: any): any;
}

declare class tGameHoridashimono {
  parent: any;
  nextUpdateTime: any;
  init(b: any): void;
  view(b: any): void;
  tryRefresh(b: any): any;
  createItem(): any;
}

declare class tGameHyk {
  parent: any;
}

declare class tGameIcon24Resource {
  parent: any;
  iconData: any;
  init(a: any): void;
  initLoad(a: any): void;
  getIconData(a: any): any;
}

declare class tGameIconResource {
  parent: any;
  iconData: any;
  init(a: any): void;
  loadIcon(a: any): void;
  getIconData(a: any): any;
}

declare class tGameIdRecycle {
  parent: any;
  data: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  checkObject(a: any): any;
  getObjectId(): any;
}

declare class tGameItem {
  parent: any;
  masterData: any;
  egoMaxLength: any;
  rankItems: any;
  rankShopItems: any;
  rankEquips: any;
  rankShopEquips: any;
  rankCharactorEquips: any;
  rankChestEquips: any;
  rareRandomRates: any;
  spaceFraction: any;
  juryokaMax: any;
  itemNameMax: any;
  equipAbilities: any;
  atkIdxs: any;
  equipAbilityIds: any;
  equipMaxRank: any;
  init(a: any): void;
  initLoad(a: any): void;
  setItemCharacteristic(): any;
  getItemCharactorUse(a: any): any;
  getItemCharacteristic(a: any): any;
  getItemMapType(a: any): any;
  getItemWatasu(a: any): any;
  getItemOshitsukeru(a: any, b: any, c: any): any;
  getItemHikitsugi(a: any): any;
  getItemRare(a: any): any;
  getSimpleItemName(a: any): any;
  getItemName(a: any, b: any, c: any, f: any): any;
  getEnableGroupItem(a: any): any;
  getItemRank(a: any): any;
  getItemSpaceMaster(a: any): any;
  getItemPriceMaster(a: any, b: any): any;
  getItemPrice(a: any, b: any, c: any, f: any, e: any): any;
  getItemSpace(a: any): any;
  getItemDescriptionSub(a: any): any;
  getItemDescription(a: any): any;
  getItemData(a: any): any;
  convertData(a: any): any;
  convertDataFix(a: any): void;
  getFixCloneItem(a: any): any;
  getMoneyItem(a: any, b: any): any;
  getItemToObject(a: any, b: any): any;
  affect(a: any): any;
  getEnableEquipCalData(a: any): any;
  getEnableEquipItems(a: any, b: any, c: any): any;
  checkCompileItem(a: any, b: any): any;
  getItemSkill(a: any, b: any, c: any): any;
  getItemSkill_1(a: any, b: any, c: any): any;
  getItemSkill_2(a: any, b: any, c: any): any;
  getItemSkill_3(a: any, b: any, c: any): any;
  getItemSkill_5(a: any, b: any, c: any): any;
  getItemSkill_6(a: any, b: any, c: any): any;
  getItemSkill_9(a: any, b: any, c: any): any;
  getItemSkill_14(a: any, b: any, c: any): any;
  getItemSkill_17(a: any, b: any, c: any): any;
  getItemSkill_19(a: any, b: any, c: any): any;
  getItemSkill_21(a: any, b: any, c: any): any;
  getItemSkill_22(a: any, b: any, c: any): any;
  getRandomShikibetsu(a: any): any;
  createRandomItem(a: any): any;
  createRandomEquipment(a: any): any;
  createRandomChestItem(a: any): any;
  createRandomChestEquipment(a: any): any;
  createMeetItem(a: any): any;
  createRandomFoodItem(a: any): any;
  createItem(a: any): any;
  convertRankEquipment(a: any, b: any, c: any, f: any): void;
  setEquipmentAccessoryData(a: any, b: any, c: any): void;
  updateEquipmentName(a: any): any;
  updateEquipmentTargetName(a: any, b: any): any;
  getEnchantmentedItem(a: any): any;
  getEnchantmentValues(a: any, b: any): any;
  getEquipSkillValues(a: any, b: any): any;
  getEnchantmentTypeIndex(a: any): any;
  getEnableEnchantmentList(a: any, b: any): any;
  getEnableEquipSkillList(a: any, b: any): any;
  setEquipmentQualityEnchantment(a: any, b: any, c: any, f: any): any;
  setEquipmentQualitySkill(a: any, b: any): any;
  setEquipmentCounterAskill(a: any, b: any, c: any): void;
  createEquipment(a: any): any;
  useSpecialItem(a: any, b: any, c: any, f: any): any;
  noroitaiseiPlusItem(a: any, b: any, c: any, f: any): any;
  noroitaiseiMinusItem(a: any, b: any, c: any, f: any): any;
  jakukataiseiPlusItem(a: any, b: any, c: any, f: any): any;
  jakukataiseiMinusItem(a: any, b: any, c: any, f: any): any;
  equipmentPlus(a: any, b: any, c: any, f: any): any;
  equipmentMinus(a: any, b: any, c: any, f: any, e: any, d: any): any;
  kanteiItem(a: any, b: any, c: any, f: any, e: any): any;
  mikanteiItem(a: any, b: any): any;
  noroikeshiItem(a: any, b: any, c: any, f: any, e: any): any;
  noroiItem(a: any, b: any, c: any, f: any, e: any, d: any): any;
  getItemTextColorCode(a: any): any;
  getItemUseMessage(a: any): any;
  usedFootItem(a: any): any;
  removeFootItem(a: any, b: any): any;
  getEquipAbilitiesData(a: any): any;
  setRankItems(): any;
  createEquipmentQuality(): any;
  createShopEquipmentQuality(): any;
  selectItemType(a: any): any;
  getEquipItemMaster(a: any, b: any): any;
  getEquipmentEnchantmentPriceValues(a: any): any;
  getEquipmentSkillPriceValues(a: any): any;
  getEquipmentCounterAskillPriceValues(a: any): any;
  getEquipmentKyushuPriceValues(a: any): any;
  sortItem(a: any): void;
  createCharactorEquipmentItem(a: any): any;
  createCharactorEquipmentSpecialItem(a: any): any;
  getEquipmentPerformanceValue(a: any): any;
  createMaterialItems(a: any): any;
  getFootItemMessage(a: any): any;
  getItemNamesMessage(a: any): any;
  setRareRandomRates(): void;
  getRareRandomRateItem(): any;
  convertTargetRankEquipment(a: any, b: any): any;
  equipRankupItem(a: any, b: any, c: any, f: any): any;
  equipmentRename(a: any, b: any): void;
  equipmentChangeChip(a: any, b: any): void;
  askillRename(a: any, b: any): void;
  askillRename_act(a: any, b: any, c: any): void;
  jobRename(a: any, b: any): void;
  zentaishiji(a: any, b: any): void;
  getEquipmentDiff(a: any, b: any): any;
  getCharaItemAskillRank(a: any, b: any): any;
  getKodaiisekiItem(a: any): any;
  equipmentKeiryoka(a: any, b: any, c: any, f: any): any;
  equipmentJuryoka(a: any, b: any, c: any, f: any): any;
  getHoseiLevel(a: any, b: any): any;
  getWeaponMainZokusei(a: any): any;
  createLockID(): any;
  setLock(a: any, b: any): void;
  clearLock(a: any, b: any): void;
  isLock(a: any, b: any): any;
  getLockId(a: any): any;
  setLockId(a: any): any;
  isEquipmentItem(a: any): any;
  getItemSkill_checkReuseItem(a: any): any;
}

declare class tGameItemInfoWindow {
  parent: any;
  cvs: any;
  ctx: any;
  fontSize: any;
  init(c: any): void;
  viewInfoWindow(c: any): any;
}

declare class tGameItemWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  clearBottomData: any;
  init(a: any): void;
  clear(): void;
  updateBottomData(a: any): void;
  getCharactorBottomData(a: any, c: any): any;
  getStorageBottomData(a: any): any;
  getMyShopBottomData(a: any): any;
  getMoneyIcon(a: any): any;
  viewItemWindow(a: any, c: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  updateItems(a: any): void;
  viewBottomWindow(a: any, c: any): any;
  getItemShortCuts(): void;
}

declare class tGameJashin {
  parent: any;
  init(c: any): void;
  createEventDungeon(): any;
  viewAdventureGuildBoard(c: any, b: any): any;
  viewAdventureGuildBoard2(c: any, b: any): void;
  oneActionFinishAction(c: any, b: any, a: any): void;
  oneActionFinishAction_jashinboss(c: any, b: any): any;
  oneActionFinishAction_jashinboss2(c: any, b: any): any;
  createBossFloor(c: any): void;
  affectZou(c: any, b: any): any;
}

declare class tGameJob {
  parent: any;
  jobData: any;
  groups: any;
  jobNameMax: any;
  init(a: any): void;
  loadJob(a: any): void;
  initLoad(a: any): void;
  getJobName(a: any, b: any): any;
  getCharactorJobName(a: any, b: any, c: any): any;
  getJobChangeTargets(a: any): any;
  initGroups(): void;
  getRandomJob(a: any): any;
}

declare class tGameJobChange {
  parent: any;
  data: any;
  init(b: any): void;
  initLoad(b: any): void;
  view(b: any, n: any): void;
  viewOne(b: any, n: any, c: any, d: any): void;
  enableJobChange(b: any): any;
}

declare class tGameKeyboard {
  parent: any;
  simplePressKeys: any;
  forcePressKeys: any;
  pressKeyLimitTime: any;
  pressKeyClickTime: any;
  pressKeyDoubleClickTime: any;
  pressKeyPressTime: any;
  longPressKeyPressTime: any;
  pressKeys: any;
  pressNaturalKeys: any;
  keymapData: any;
  keymapDataDefault: any;
  isPreventDefault: any;
  isEnableBlock: any;
  init(): void;
  loadKeyMap(d: any): void;
  initEvent(d: any): void;
  calKey(): void;
  frameAction(d: any): void;
  isForceDown(d: any): any;
  isDown(d: any): any;
  isDoubleDown(d: any): any;
  isClick(d: any): any;
  isDoubleClick(d: any): any;
  isPress(d: any): any;
  isDoublePress(d: any): any;
  isLongPress(d: any): any;
  isWordClick(d: any): any;
  clearPressKeys(): void;
  getDownKeys(): any;
  setEnablePreventDefault(): void;
  setDisablePreventDefault(): void;
  sendKeyDown(d: any): void;
  sendKeyUp(d: any): void;
}

declare class tGameLakeZou {
  parent: any;
  init(c: any): void;
  view(c: any, h: any): void;
  act(c: any): any;
}

declare class tGameLoading {
  parent: any;
  targets: any;
  objs: any;
  init(a: any): void;
  addLoading(a: any): any;
  removeLoading(a: any): any;
  viewLoadingError(a: any, b: any, c: any): any;
  getErrorNum(): any;
  viewLoading(): void;
  hiddenLoading(): void;
  viewLoadingErrorFrame(): void;
  hiddenLoadingErrorFrame(): void;
  retry(): void;
}

declare class tGameLog {
  parent: any;
  logs: any;
  logMaxNum: any;
  viewLogMaxNum: any;
  textMaxWidth: any;
  fontSize: any;
  lineHeight: any;
  cvs: any;
  ctx: any;
  tcvs: any;
  tctx: any;
  lastRect: any;
  isRequireRefresh: any;
  init(a: any): void;
  addAndViewLog(a: any, b: any): void;
  addLog(a: any, b: any): void;
  clearLog(): void;
  drawLog(): any;
  viewLog(): any;
  viewOverlookLog(a: any): any;
  drawOverlookLog(a: any): any;
  frameActionDraw(a: any): any;
}

declare class tGameMagicalGirl {
  parent: any;
  init(d: any): void;
  isWarikomi(d: any, b: any): any;
  actWarikomi(d: any, b: any): void;
  oneActionFinishAction(d: any, b: any, a: any): void;
  oneActionFinishAction_magicalgirlgekiha(d: any, b: any): any;
  okoru(d: any): any;
  viewMap(d: any): void;
  getMoriPositions(): any;
}

declare class tGameMaigo {
  parent: any;
  init(b: any): void;
  tryCreate(b: any): any;
  oneActionFinishAction(b: any, c: any, a: any): void;
  oneActionFinishAction_maigofirst(b: any, c: any): any;
  oneActionFinishAction_maigoevent1(b: any, c: any): void;
  oneActionFinishAction_maigoevent2(b: any, c: any): void;
  oneActionFinishAction_maigobossgekiha(b: any, c: any): any;
  viewMap(b: any): void;
  deleteMaigoCharactor(): any;
  affectAnswer(b: any): void;
  calBasho(): any;
  affectObject(b: any): any;
  inTargetMap(b: any, c: any, a: any): any;
  createTargetMap(b: any, c: any): any;
  errorFix(b: any, c: any): any;
  setTargetEvent1(b: any, c: any): any;
  setTargetEvent2(b: any, c: any): any;
}

declare class tGameMain {
  isA: any;
  isL: boolean;
  version: number;
  objs: any;
  fonts: any;
  screen: any;
  frame: any;
  frameActionEvent: any;
  subFrameActionEvent: any;
  jspngCallBack: any;
  jspngCallBacks: any;
  jspngWorker: any;
  jspng2CallBack: any;
  jspng2CallBacks: any;
  jspng2Worker: any;
  tGameMap: tGameMap;
  tGameKeyboard: tGameKeyboard;
  tGameRefresh: tGameRefresh;
  tGameMapResource: tGameMapResource;
  tGameChipsetResource: tGameChipsetResource;
  tGameObjectResource: tGameObjectResource;
  tGameFaceResource: tGameFaceResource;
  tGameWindowResource: tGameWindowResource;
  tGameCharactor: tGameCharactor;
  tGameCharactorData: tGameCharactorData;
  tGameMessageWindow: tGameMessageWindow;
  tGameText: tGameText;
  tGameTalkResource: tGameTalkResource;
  tGameRoutineMap: tGameRoutineMap;
  tGameRoutineMapMove: tGameRoutineMapMove;
  tGameSelectTarget: tGameSelectTarget;
  tGameSoundResource: tGameSoundResource;
  tGameBgmResource: tGameBgmResource;
  tGameDungeonGenerator: tGameDungeonGenerator;
  tGameTownGenerator: tGameTownGenerator;
  tGameSchoolGenerator: tGameSchoolGenerator;
  tGameCastleGenerator: tGameCastleGenerator;
  tGameFieldGenerator: tGameFieldGenerator;
  tGameLog: tGameLog;
  tGameIconResource: tGameIconResource;
  tGameIcon24Resource: tGameIcon24Resource;
  tGameAffectMap: tGameAffectMap;
  tGameTime: tGameTime;
  tGameMenu: tGameMenu;
  tGameName: tGameName;
  tGameSkill: tGameSkill;
  tGameSkillAction: tGameSkillAction;
  tGameSkillActionWindow: tGameSkillActionWindow;
  tGameItem: tGameItem;
  tGameSave: tGameSave;
  tGameTitle: tGameTitle;
  tGameTitleWindow: tGameTitleWindow;
  tGameParts: tGameParts;
  tGamePlayerPartyInfo: tGamePlayerPartyInfo;
  tGameFukidashiResource: tGameFukidashiResource;
  tGameEmotionResource: tGameEmotionResource;
  tGameCalc: tGameCalc;
  tGameEquipmentWindow: tGameEquipmentWindow;
  tGameSelectFovTarget: tGameSelectFovTarget;
  tGameSelectFovTargetSkill: tGameSelectFovTargetSkill;
  tGameEffect: tGameEffect;
  tGameOverMapResource: tGameOverMapResource;
  tGameTrap: tGameTrap;
  tGameGoodTrap: tGameGoodTrap;
  tGameNumWindow: tGameNumWindow;
  tGameShop: tGameShop;
  tGameItemInfoWindow: tGameItemInfoWindow;
  tGameSkillActionInfoWindow: tGameSkillActionInfoWindow;
  tGameAdventurerGuild: tGameAdventurerGuild;
  tGameAdventurerGuildWindow: tGameAdventurerGuildWindow;
  tGameAdventurerGuildConfirmWindow: tGameAdventurerGuildConfirmWindow;
  tGameWeather: tGameWeather;
  tGameShortCut: tGameShortCut;
  tGameFarm: tGameFarm;
  tGameOption: tGameOption;
  tGameCooking: tGameCooking;
  tGameJob: tGameJob;
  tGameSleep: tGameSleep;
  tGameSpecialMap: tGameSpecialMap;
  tGameSkillWindow: tGameSkillWindow;
  tGameSkillInfoWindow: tGameSkillInfoWindow;
  tGameSkillShop: tGameSkillShop;
  tGameStatusWindow: tGameStatusWindow;
  tGameSlaveShop: tGameSlaveShop;
  tGameTextInputWindow: tGameTextInputWindow;
  tGameRecipe: tGameRecipe;
  tGameCreateWindow: tGameCreateWindow;
  tGameCharactorRuleWindow: tGameCharactorRuleWindow;
  tGameSelectWindow: tGameSelectWindow;
  tGameOptionWindow: tGameOptionWindow;
  tGameStorage: tGameStorage;
  tGameShukkabako: tGameShukkabako;
  tGameEnchantment: tGameEnchantment;
  tGameBlacksmith: tGameBlacksmith;
  tGameFishing: tGameFishing;
  tGameMapEditor: tGameMapEditor;
  tGameMyTown: tGameMyTown;
  tGameNouchi: tGameNouchi;
  tGameEditMember: tGameEditMember;
  tGameSteal: tGameSteal;
  tGameChangeProfile: tGameChangeProfile;
  tGameCriminalWindow: tGameCriminalWindow;
  tGameTableTalk: tGameTableTalk;
  tGameAllocateStatusWindow: tGameAllocateStatusWindow;
  tGameMapCharaCommonAction: tGameMapCharaCommonAction;
  tGameJobChange: tGameJobChange;
  tGameJobSlumGenerator: tGameSlumGenerator;
  tGameRectArea: tGameRectArea;
  tGameRoom: tGameRoom;
  tGameSkillActionBook: tGameSkillActionBook;
  tGameMyShop: tGameMyShop;
  tGameFullscreenLog: tGameFullscreenLog;
  tGameWindows: tGameWindows;
  tGameSelectImageTarget: tGameSelectImageTarget;
  tGameCreateCharactor: tGameCreateCharactor;
  tGameEventAnimation: tGameEventAnimation;
  tGameDesignedMap: tGameDesignedMap;
  tGameEtc: tGameEtc;
  tGameMaou: tGameMaou;
  tGameLoading: tGameLoading;
  tGameMagicalGirl: tGameMagicalGirl;
  tGameEventFrame: tGameEventFrame;
  tGameGameOver: tGameGameOver;
  tGameEvent: tGameEvent;
  tGameCreateUniqueCharactor: tGameCreateUniqueCharactor;
  tGameMain: tGameMain;
  tGameEtcTown: tGameEtcTown;
  tGameTougijo: tGameTougijo;
  tGameSlot: tGameSlot;
  tGamePoker: tGamePoker;
  tGameCasino: tGameCasino;
  tGameCharactorEquipRuleWindow: tGameCharactorEquipRuleWindow;
  tGameEnsei: tGameEnsei;
  tGameEquipRankup: tGameEquipRankup;
  tGameHikitsugi: tGameHikitsugi;
  tGameNoriai: tGameNoriai;
  tGameFieldMaterial: tGameFieldMaterial;
  tGameWar: tGameWar;
  tGameAkumuDungeon: tGameAkumuDungeon;
  tGameMyAdventurerCharactor: tGameMyAdventurerCharactor;
  tGameTutorial: tGameTutorial;
  tGameHelp: tGameHelp;
  tGameBazaarGenerator: tGameBazaarGenerator;
  tGameMaigo: tGameMaigo;
  tGameButsu: tGameButsu;
  tGameNaraku: tGameNaraku;
  tGameShitaiasari: tGameShitaiasari;
  tGameGod: tGameGod;
  tGameFaithWindow: tGameFaithWindow;
  tGameFaith: tGameFaith;
  tGameWeading: tGameWeading;
  tGameSozaifukuro: tGameSozaifukuro;
  tGameBaby: tGameBaby;
  tGameIdRecycle: tGameIdRecycle;
  tGameStoryWindow: tGameStoryWindow;
  tGameOpening: tGameOpening;
  tGameGamePad: tGameGamePad;
  tGameGameClear: tGameGameClear;
  tGameGamePadEditor: tGameGamePadEditor;
  tGameGamePadBase: tGameGamePadBase;
  tGameRecord: tGameRecord;
  tGameOnsen: tGameOnsen;
  tGameSfpc: tGameSfpc;
  tGameYagi: tGameYagi;
  tGameLakeZou: tGameLakeZou;
  tGameStg: tGameStg;
  tGameYukigassen: tGameYukigassen;
  tGameHoridashimono: tGameHoridashimono;
  tGameDairyQuest: tGameDairyQuest;
  tGameAnimalWood: tGameAnimalWood;
  tGameChikaMakyo: tGameChikaMakyo;
  tGameHikyo: tGameHikyo;
  tGameUniqueQuest: tGameUniqueQuest;
  tGameShortEvent: tGameShortEvent;
  tGameJashin: tGameJashin;
  tGameVersion: tGameVersion;
  tGameMyTownRuleWindow: tGameMyTownRuleWindow;
  tGameSubTown: tGameSubTown;
  tGameMyTownMeibo: tGameMyTownMeibo;
  tGameExMapData: tGameExMapData;
  tGameSelectBgmWindow: tGameSelectBgmWindow;
  tGameMenuShortcut: tGameShortCut;
  tGameGameOptionWindow: tGameGameOptionWindow;
  tGameRyourifukuro: tGameRyourifukuro;
  tGameShokuzaifukuro: tGameShokuzaifukuro;
  tGameHyk: tGameHyk;
  tGameHikitsugiNakama: tGameHikitsugiNakama;
  tGameAcn: tGameAcn;
  tGameSoubifukuro: tGameSoubifukuro;
  loadFinishData: any;
  firstLogData: any;
  limitLevel: any;
  init(b: any): void;
  initNext(b: any): void;
  initLoad(b: any): void;
  initFrame(): void;
  frameAction(b: any): void;
  refreshCanvas(b: any): void;
  subFrameAction(b: any): void;
  subRefreshCanvas(b: any): void;
  loadJsData(b: any, a: any, d: any, c: any): void;
  loadImage(b: any, a: any, d: any): any;
  /**
   * 乱数を取得する
   * @param min 最小値
   * @param max 最大値
   */
  getRandom(min: number, max: number): number;
  clearAllCanvase(b: any, a: any): void;
  hiddenCanvases(b: any): void;
  viewCanvases(b: any): void;
  clearBlurCanvases(b: any): void;
  setBlurCanvases(b: any): void;
  checkLoadFinish(): any;
  getBrowser(): any;
  getRandomBias(b: any, a: any): any;
  log(b: any, a: any): void;
  clog(b: any, a: any, d: any): void;
  shuffleArray(b: any): void;
  close(): void;
  reload(): void;
  changeScreenSize(b: any): any;
  startNewGame(b: any, a: any, d: any): void;
  outputMap(b: any, a: any, d: any): any;
  outputRoom(b: any, a: any, d: any): any;
  setViewPosition(b: any): void;
  convertCsv(b: any): any;
  loadJsPngWorker(b: any, a: any, d: any): any;
  loadJsPng2Worker(b: any, a: any, d: any): any;
  isTr(): any;
  actJsPngWorker(b: any, a: any): void;
  actJsPng2Worker(b: any, a: any): void;
  initJsError(): void;
  initFirstLog(): void;
  getCachePrefix(): any;
}

declare class tGameMaou {
  parent: any;
  data: any;
  images: any;
  tobatsuLvs: any;
  init(b: any): void;
  createMap(b: any, c: any): void;
  createAlly(b: any, c: any): void;
  setMaou(b: any, c: any, a: any): any;
  createEnemy(b: any, c: any, a: any): void;
  getMaouMapAll(b: any): any;
  getMaouMaps(b: any): any;
  getMaouObject(b: any): any;
  getMaouBarriers(b: any, c: any): any;
  getRandomMaouId(b: any): any;
  getPayment(b: any): any;
  getNextPaymentTime(b: any): any;
  createFieldData(): any;
  setTimeOverFaith(b: any, c: any): void;
  checkTimeOver(b: any): any;
  destroyWorld(b: any, c: any): void;
  getFreeCollaborator(b: any): any;
  getSetsumei(b: any, c: any, a: any): any;
  getItemSetsumei(b: any): any;
  viewAdventureGuildBoard(b: any, c: any): void;
  getPayItems(b: any): any;
  oneActionFinishAction(b: any, c: any, a: any): void;
  oneActionFinishAction_maougekiha(b: any, c: any): any;
  oneActionFinishAction_maouteshitashutsugen(b: any, c: any): any;
}

declare class tGameMap {
  parent: any;
  data: any;
  maps: any;
  cvs: any;
  ctx: any;
  scvs: any;
  sctx: any;
  obcvs: any;
  obctx: any;
  o1cvs: any;
  o1ctx: any;
  o2cvs: any;
  o2ctx: any;
  vcvs: any;
  vctx: any;
  pcvs: any;
  pctx: any;
  cache: any;
  init(): void;
  getChipDataByFieldChip(a: any): any;
  getChipData(a: any): any;
  getYukaChip(a: any, f: any, c: any, b: any, g: any): any;
  initLoad(a: any): void;
  addMap(a: any): any;
  removeMap(a: any): any;
  drawSmallMap(a: any): any;
  getSmallMapData(a: any): any;
  drawGroundOver(a: any, f: any): any;
  drawGround(a: any, f: any): void;
  drawOutSightGround(a: any): void;
  drawObject(a: any, f: any): void;
  drawOver(a: any, f: any): void;
  getFovCharactors(a: any): any;
  convertMapData(a: any, f: any, c: any, b: any): any;
  convertMapData2(a: any, f: any, c: any, b: any): any;
  getFov(a: any): any;
  getAroundCanMove(a: any): any;
  dropItem(a: any): any;
  removeObject(a: any, f: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  getMap(a: any): any;
  getRoute(a: any, f: any, c: any, b: any, g: any, d: any, e: any): any;
  nextTrunFukidashi(a: any): any;
  nextTrunEmotion(a: any): any;
  getFreeSpaces(a: any, f: any, c: any, b: any, g: any): any;
  checkObjectSpace(a: any, f: any, c: any, b: any): any;
  searchMapObject(a: any, f: any): any;
  searchMapObjectType(a: any, f: any): any;
  getObjectSmap(a: any, f: any, c: any): any;
  checkAdjacentCharactor(a: any, f: any): any;
  getRandomSpace(a: any): any;
  getRandomSpace2(a: any): any;
  getDistance(a: any, f: any): any;
  getDistance2(a: any, f: any): any;
  getCharactorDistances(a: any, f: any): any;
  getDirection(a: any, f: any, c: any): any;
  getMapSpData(a: any, f: any): any;
  removeMapObjects(a: any): any;
  takeSkillAction(a: any, f: any, c: any, b: any, g: any): any;
  clearCacheViewMap(): void;
  cloneMap(a: any): any;
  getInMapPosition(a: any, f: any): any;
  dropMap(a: any, f: any): any;
  setCommonObjectCharactors(a: any): void;
  getIncludeAreas(a: any, f: any, c: any): any;
  getTargetAreaCanvas(a: any, f: any, c: any): any;
  removeOneActionFinishAction(a: any, f: any): any;
  setGroundOverTarget(a: any, f: any, c: any): void;
  getAroundFreePositions(a: any, f: any, c: any): any;
  getCalMoveMap(a: any): any;
  drawLevel(a: any): void;
  createFieldRoad(a: any): any;
  cacheFieldRoadData(a: any): any;
  drawFieldRoad(a: any): any;
}

declare class tGameMapCharaCommonAction {
  parent: any;
  init(a: any): void;
  actionBeforePatternOne(a: any, b: any, c: any, d: any): void;
  actionPatternOne(a: any, b: any): any;
  viewMapActionPatternOne(a: any, b: any): any;
  actionPatternType_counter(a: any, b: any): any;
  viewMapActionPatternOne_myhome(a: any, b: any): any;
  viewMapActionPatternOne_counter(a: any, b: any): any;
  viewMapActionPatternOne_bed(a: any, b: any, c: any): any;
  viewMapActionPatternOne_chair(a: any, b: any, c: any): any;
  viewMapActionPatternOne_diningchair(a: any, b: any, c: any): any;
  viewMapActionPatternOne_farm(a: any, b: any): any;
  viewMapActionPatternOne_goei(a: any, b: any): any;
  viewMapActionPatternOne_kenkyu(a: any, b: any): any;
  viewMapActionPatternOne_imushitsu(a: any, b: any): any;
  actionPatternType_myhome(a: any, b: any): any;
  actionPatternType_myhomecenter(a: any, b: any): any;
  actionPatternType_kenkyu(a: any, b: any): any;
  actionPatternType_imushitsu(a: any, b: any): any;
  actionPatternType_animalwood(a: any, b: any): any;
  actionPatternType_bed(a: any, b: any, c: any): any;
  actionPatternType_noriaibasha(a: any, b: any): any;
  actionPatternType_aroundtypedataposition(a: any, b: any): any;
  actionPatternType_randompoint(a: any, b: any): any;
  actionPatternType_chair(a: any, b: any, c: any): any;
  actionPatternType_diningchair(a: any, b: any, c: any): any;
  actionPatternType_adventureguild(a: any, b: any, c: any): any;
  actionPatternType_goei(a: any, b: any): any;
  moveTargetPoint(a: any, b: any): any;
  actionPatternBeforeAction(a: any, b: any, c: any, d: any): void;
  actionPatternType_farm(a: any, b: any): any;
  updateActionPattern(a: any): any;
  getCharactorObjects(a: any): any;
  selectEatTarget(a: any, b: any): any;
  selectRandomTarget(a: any, b: any): any;
  selectRandomNightTarget(a: any, b: any): any;
  selectBedTarget(a: any, b: any): any;
  updateActionPattern_default(a: any, b: any): any;
  updateActionPattern_shop(a: any, b: any): any;
  updateActionPattern_shop2(a: any, b: any): any;
  updateActionPattern_housemain(a: any, b: any): any;
  updateActionPattern_farmor(a: any, b: any): any;
  updateActionPattern_king(a: any, b: any): any;
  updateActionPattern_goei(a: any, b: any): any;
  updateActionPattern_kenkyu(a: any, b: any): any;
  updateActionPattern_isha(a: any, b: any): any;
  updateActionPattern_animalwood(a: any, b: any): any;
  updateActionPattern_tougijo_uketsuke(a: any, b: any): any;
  updateActionPattern_casino_dealer(a: any, b: any): any;
  updateActionPattern_casino_chonin(a: any, b: any): any;
  updateActionPattern_noriai(a: any, b: any): any;
  updateActionPattern_shitaiasari(a: any, b: any): any;
  addTimeAction(a: any, b: any, c: any): any;
  viewMapFixPosition(a: any): void;
  okiru(a: any, b: any): any;
}

declare class tGameMapEditor {
  parent: any;
  objs: any;
  data: any;
  isInit: any;
  viewData: any;
  scrollBarMinSize: any;
  screenSize: any;
  objectPos: any;
  templateData: any;
  events: any;
  myData: any;
  historyMax: any;
  editorHeight: any;
  init(a: any): void;
  initLoad(a: any): void;
  getLearnObject(a: any): any;
  setLearnObject(a: any): any;
  getLearnTemplate(a: any): any;
  setLearnTemplate(a: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initData(): any;
  viewEditor(a: any): void;
  updateConvertMapData(): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  viewCanvasCursor(a: any, b: any): void;
  getCanvasCursorPosition(): any;
  setBackground(a: any, b: any): any;
  setObject(a: any, b: any): any;
  moveObject(a: any): any;
  viewEditorBackgroundCursor(): any;
  setScrollBar(): void;
  getScrollBarInfo(): any;
  addScrollBarPosition(a: any, b: any): void;
  setScrollBarPosition(a: any): void;
  setScrollPosition(): void;
  setScale(a: any): void;
  setMode(a: any): void;
  viewEditorObjectCursor(): any;
  viewObjectMenu(a: any): void;
  hiddenObjectMenu(): void;
  actionCancel(): void;
  actionRegist(): void;
  viewLock(): void;
  hiddenLock(): void;
  selectTargetCharactor(a: any, b: any): void;
  isEnableObject(a: any): any;
  isEnableTemplate(a: any): any;
  drawEditorObject(): void;
  changeSelectTemplate(): any;
  setTemplate(a: any, b: any): any;
  selectObjectType(a: any, b: any): void;
  getHouses(): any;
  setLearnTemplateObject(a: any): any;
  initObjectSelectorPosition(): void;
  updateTemplateDisabled(): void;
  clearMap(a: any): any;
  viewConfirm(a: any): void;
  releaseAllRecipe(): void;
  addHistory(): void;
  changeHistory(a: any): any;
  updateHistoryButton(): void;
  callBackClearViewData(): void;
  editorToggle(a: any): void;
}

declare class tGameMapResource {
  parent: any;
  mapData: any;
  mapBaseData: any;
  init(a: any): void;
  loadData(a: any, b: any): any;
  loadDataWithMyData(a: any, b: any): any;
  getDrawMapData(a: any, b: any): void;
}

declare class tGameMenu {
  parent: any;
  init(b: any): void;
  viewMenu(b: any, c: any): void;
  viewItem(b: any, c: any): void;
  viewEquipment(b: any, c: any): void;
  viewSkillAction(b: any, c: any): void;
  viewSkill(b: any, c: any): void;
  viewStatus(b: any, c: any): void;
  viewAllocateStatus(b: any): void;
  viewReceivedQuest(b: any): void;
  viewDairyQuest(b: any): void;
  viewOptionGroup(b: any, c: any): void;
  viewOption(b: any): void;
  viewOption2(b: any): void;
  viewOption3(b: any): void;
  viewMenuShortcut(b: any): void;
  viewGameOption(b: any): void;
  viewHelp(b: any): void;
  viewEditMyTown(b: any, c: any): void;
  viewEditSubTown(b: any, c: any): void;
  viewEditNouchi(b: any, c: any): void;
  viewEditMember(b: any, c: any): void;
  viewLog(b: any, c: any): void;
  viewSubInfo(b: any): void;
}

declare class tGameMenuShortcutWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  init(b: any): void;
  clear(): void;
  viewWindow(b: any, c: any): any;
  drawPage(b: any): void;
  getCursor(b: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
  setCursor(b: any): any;
  getShortCuts(): void;
  viewBottomWindow(): any;
  updateItems(b: any): void;
}

declare class tGameMessageWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  viewData: any;
  cursor: any;
  defaultViewItemMaxNum: any;
  viewItemMaxNum: any;
  init(a: any): void;
  viewMessageWindow(a: any, d: any): any;
  drawAnswers(a: any): any;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  drawPage(a: any): void;
  convertContinuationMessages(a: any, d: any): any;
  viewContinuationMessageWindow(a: any, d: any): void;
}

declare class tGameMyAdventurerCharactor {
  parent: any;
  max: any;
  myData: any;
  init(d: any): void;
  initLoad(d: any): void;
  initData(): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(d: any): any;
  save(d: any): void;
  load(d: any): void;
  getLocalStorageData(d: any): void;
  view(d: any, c: any): void;
  convertChara2Mydata(d: any, c: any): any;
  convertImport2Mydata(d: any): any;
  getItemDescription(d: any, c: any): any;
  viewError(d: any): void;
  export(d: any, c: any): any;
  convertTextB64(d: any, c: any): void;
  confirmImport(d: any): any;
  refreshOverwriteTargets(d: any, c: any): void;
}

declare class tGameMyShop {
  parent: any;
  maxItemNum: any;
  kakuchoMoney: any;
  tesuryoMax: any;
  data: any;
  viewData: any;
  init(b: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(b: any): any;
  isViewSelectColumn(): any;
  getSelectColumn(): any;
  view(b: any, a: any): void;
  viewIn1(b: any): void;
  viewIn2(b: any, a: any): void;
  inItem(b: any): any;
  viewOut1(b: any): void;
  viewOut2(b: any): void;
  outItem(b: any): any;
  removeItem(b: any, a: any): any;
  kakucho(b: any): void;
  buy(): void;
  getTesuryoRate(b: any, a: any): any;
}

declare class tGameMyTown {
  parent: any;
  init(a: any): void;
  getTargetMapCharaNum(a: any, b: any): any;
  isHomeMyTownSubTown(a: any): any;
  isInHomeMyTownSubTown(a: any): any;
  getMyTownName(): any;
  getChipData(a: any): any;
  setMyTown(a: any, b: any): any;
  createMyTownWithLoad(a: any, b: any): void;
  moveMyTown(a: any): any;
  createMyTown(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewMenuWindow(a: any): void;
  gotoMyTown(a: any, b: any): any;
  checkUpdateMap(a: any): any;
  affectCharactor(a: any): any;
  joinReleaseRecipe(a: any): void;
  isMyTownNakamaType(a: any): any;
  getMyTownNakamaType(a: any): any;
  getMyTownNakamaCtype(a: any): any;
  setNightBgmMenu(a: any): void;
}

declare class tGameMyTownMeibo {
  parent: any;
  viewData: any;
  init(c: any): void;
  viewWindow(c: any): any;
  getItemDescription(c: any, b: any): any;
  changeCharaTown(c: any, b: any): any;
  isEnableChangeJuninToNakama(c: any): any;
  isEnableChangeNakamaToJunin(c: any): any;
  changeJuninToNakama(c: any): any;
  changeNakamaToJunin(c: any): any;
}

declare class tGameMyTownRuleWindow {
  parent: any;
  viewData: any;
  init(a: any): void;
  isEnableCharactor(a: any): any;
  viewCharactorRuleWindow(a: any, b: any): any;
}

declare class tGameName {
  parent: any;
  nameData: any;
  init(a: any): void;
  initLoad(a: any): void;
  createCharactorName(a: any): any;
  createTownName(a: any): any;
  createSchoolName(): any;
  createCastleName(): any;
  createSlumName(): any;
}

declare class tGameNaraku {
  parent: any;
  init(a: any): void;
  getDungeonLevel(a: any): any;
  getDungeonFloorFix(a: any): any;
  refreshDungeon(a: any, b: any): any;
  createDungeon(a: any): any;
  createNaraku(a: any, b: any): any;
  getEscapeNextData(): any;
}

declare class tGameNoriai {
  parent: any;
  init(b: any): void;
  selectMokutekichi(b: any): any;
  moveEvent(b: any): any;
  start(b: any): void;
  createRestMap(): any;
  restFinish(b: any): any;
  yatouFinish(b: any): any;
  addTime(b: any): any;
  createYatouMap(): any;
  finishYatou(b: any): any;
  removeNoriaiBashaObject(b: any): void;
}

declare class tGameNouchi {
  parent: any;
  init(a: any): void;
  getNouchiName(): any;
  getChipData(a: any): any;
  setNouchi(a: any, b: any): any;
  createNouchiWithLoad(a: any, b: any): void;
  moveNouchi(a: any): any;
  createNouchi(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewMenuWindow(a: any): void;
  checkUpdateMap(a: any): any;
}

declare class tGameNumWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  inputFontSize: any;
  viewData: any;
  cursor: any;
  textBox: any;
  init(b: any): void;
  viewNumWindow(b: any, c: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
  setNum(b: any, c: any, a: any): any;
  getInputValue(): any;
}

declare class tGameObjectResource {
  parent: any;
  objectData: any;
  cantMoveMap: any;
  init(b: any): void;
  loadObject(b: any): void;
  createID(): any;
  getMapEditorData(b: any): any;
  convertData(b: any): any;
  convertDoorObject(b: any): any;
  tryOpenDoor(b: any): any;
  tryOpenStorage(b: any): any;
  tryOpenChest(b: any): any;
  tryOpenMonsterChest(b: any, a: any): any;
  openDoor(b: any): any;
  closeDoor(b: any): any;
  getOpenDoorInfo(b: any): any;
  getOpenStorageInfo(b: any): any;
  getOpenChestInfo(b: any): any;
  affect(b: any): any;
  getCantMoveMap(b: any): any;
  createFwood(b: any): any;
  yurasuFwood(b: any, a: any): void;
  inStorageItem(b: any, a: any, c: any, e: any, g: any): any;
  outStorageItem(b: any, a: any, c: any, e: any, g: any): any;
  getStorageMaxSpace(b: any): any;
  getStorageSpace(b: any): any;
  addStorageItem(b: any, a: any, c: any, e: any, g: any): any;
  removeStorageItem(b: any, a: any, c: any, e: any): any;
  createStorage2(b: any): any;
  createStorage3(b: any): any;
  createStorage4(b: any): any;
  createRankChest(b: any): any;
  createLevelMonsterChest(b: any): any;
  createChest(b: any): any;
  createMonsterChest(b: any): any;
  createRankHibi(b: any): any;
  isTurnEventObject(b: any): any;
  turnAction(b: any): any;
  turnAction_bomb(b: any, a: any): any;
  takeSkillAction(b: any, a: any, c: any, e: any, g: any, l: any): any;
  takeSkillAction_yubaku(b: any, a: any, c: any, e: any, g: any, l: any): any;
  viewUnlockLog(b: any, a: any): any;
  affectWarikomi_dungeonnext(b: any, a: any): any;
  affectStorage2(b: any, a: any): void;
  viewHogyokuKetsugo(b: any, a: any): void;
  kanteisosei(b: any, a: any): void;
  trialErrorMessage(b: any, a: any): void;
}

declare class tGameOnsen {
  parent: any;
  init(h: any): void;
  view(h: any, a: any): void;
  view2(h: any, a: any): void;
  hairu(h: any): void;
  kyoka(h: any, a: any): any;
}

declare class tGameOpening {
  parent: any;
  talkData: any;
  viewData: any;
  hiddenCanvases: any;
  cvs: any;
  ctx: any;
  init(): void;
  view(a: any, c: any): any;
  view_k1(): void;
  view_k2(): void;
  view_k3(): void;
  view_k4(): void;
  view_k5(): void;
  viewMessage(a: any, c: any, b: any): void;
  createNohara(a: any): any;
  createAnkoku(a: any): any;
  createField(a: any): any;
  createTown(a: any): any;
  createDungeon(a: any): any;
}

declare class tGameOption {
  parent: any;
  masterData: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  initData(a: any): any;
  getDataValue(a: any): any;
  setDataValue(a: any, b: any): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  save(a: any): void;
  load(a: any): void;
  getLocalStorageData(a: any): void;
  reflect(): void;
  updateLoadIndex(a: any, b: any): void;
}

declare class tGameOptionWindow {
  parent: any;
  viewData: any;
  init(e: any): void;
  viewOptionWindow(e: any, a: any): void;
  viewOptionWindow2(e: any, a: any): void;
  viewOptionWindow3(e: any, a: any): void;
}

declare class tGameOverMapResource {
  parent: any;
  chipsize: any;
  omapData: any;
  init(b: any): void;
  initLoad(b: any): void;
  getOrderMap(b: any): any;
  getRoundMap(b: any, a: any, c: any): any;
  getEdgeChipset(b: any): any;
  getChipsetIndex(b: any, a: any): any;
  drawChipset(b: any): any;
}

declare class tGameParts {
  parent: any;
  cvs: any;
  ctx: any;
  init(): void;
  createProgressBar(f: any, b: any, g: any, h: any, d: any, e: any): any;
}

declare class tGamePlayerPartyInfo {
  parent: any;
  cvs: any;
  ctx: any;
  isRequireRefresh: any;
  init(): void;
  setRefreshFlg(): void;
  viewPartyInfo(): void;
  viewCharactorInfo(a: any): any;
  frameActionDraw(a: any): any;
}

declare class tGamePoker {
  parent: any;
  data: any;
  objs: any;
  viewData: any;
  waits: any;
  init(a: any): void;
  getPlayerCoin(): any;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  initFrame(a: any): void;
  getShuffleCards(): any;
  getCardPosition(a: any): any;
  setCardImage(a: any, b: any): void;
  updateMymoney(): void;
  view(a: any): void;
  initBetView(a: any, b: any, c: any): any;
  setMode(a: any, b: any): void;
  clear(): void;
  startGame(): any;
  dealCards(a: any, b: any, c: any): any;
  checkMatch(): any;
  finishGame(): void;
  hit(a: any): void;
  animationGetCoin(a: any): void;
  changeCards(): void;
  throwCards(a: any, b: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawLock(): void;
  drawCursor(a: any): void;
  drawBet(): void;
  affect(a: any): void;
}

declare class tGameRecipe {
  parent: any;
  masterData: any;
  myData: any;
  init(a: any): void;
  initLoad(a: any): void;
  getLearn(a: any): any;
  setLearn(a: any): any;
  initData(): any;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  getUnlearnedList(a: any): any;
}

declare class tGameRecord {
  parent: any;
  init(e: any): void;
  view(e: any, f: any): void;
  view_chara(e: any, f: any): void;
  view_item(e: any, f: any): void;
  view_hikyo(e: any, f: any): void;
  view_item2(e: any, f: any): void;
}

declare class tGameRectArea {
  parent: any;
  init(a: any): void;
  getRectsOuterPoints(a: any): any;
  getRandomRectPosition(a: any, b: any, e: any): any;
  getMoveXY(a: any, b: any): any;
  getCoverRect(a: any, b: any): any;
  isCrossRect(a: any, b: any): any;
  isCrossLine(a: any, b: any, e: any, k: any, f: any, g: any, c: any, h: any, l: any): any;
  getCrossPosition(a: any, b: any, e: any, k: any, f: any, g: any, c: any, h: any): any;
}

declare class tGameRefresh {
  parent: any;
  tug: any;
  refreshCallBack: any;
  init(a: any): void;
  setCallBack(a: any): void;
  callAnimationFrame(): void;
}

declare class tGameRoom {
  parent: any;
  init(a: any): void;
  isSizeOver(a: any): any;
  wideRoad(a: any): void;
  createRoad(a: any): void;
  createRoomsMap(a: any): any;
  setObject(a: any): any;
  getCreateRoomCon_1(a: any): any;
  getCreateRoomCon_2(a: any): any;
  getCreateRoomCon_3(a: any): any;
  getCreateRoomCon_4(a: any): any;
  getCreateRoomCon_5(a: any): any;
  getCreateRoomCon_6(a: any): any;
  getCreateRoomCon_7(a: any): any;
  getCreateRoomCon_8(a: any): any;
  getCreateRoomCon_9(a: any): any;
  getCreateRoomCon_10(a: any): any;
  getCreateRoomCon_11(a: any): any;
  getCreateRoomCon_12(a: any): any;
  getCreateRoomCon_13(a: any): any;
  getCreateRoomCon_14(a: any): any;
  getCreateRoomCon_15(a: any): any;
  getCreateRoomCon_16(a: any): any;
  getCreateRoomCon_17(a: any): any;
  getCreateRoomCon_19(a: any): any;
  getCreateRoomCon_20(a: any): any;
  getCreateRoomCon_21(a: any): any;
  getCreateRoomCon_23(a: any): any;
  getCreateRoomCon_30(a: any): any;
  getCreateRoomCon_31(a: any): any;
  getCreateRoomCon_32(a: any): any;
  getCreateRoomCon_33(a: any): any;
  getCreateRoomCon_34(a: any): any;
  getCreateRoomCon_35(a: any): any;
  getCreateRoomCon_37(a: any): any;
  getCreateRoomCon_38(a: any): any;
  getCreateRoomCon_50(a: any): any;
  getCreateRoomCon_51(a: any): any;
  getCreateRoomCon_52(a: any): any;
  getCreateRoomCon_53(a: any): any;
  getCreateRoomCon_54(a: any): any;
  getCreateRoomCon_55(a: any): any;
  getCreateRoomCon_56(a: any): any;
  getCreateRoomCon_57(a: any): any;
  getCreateRoomCon(a: any): any;
  createMap(a: any): any;
  copyObjectLinks(a: any): any;
  createCharactor(a: any): any;
  setOCharabject(a: any): any;
  createAnimals(a: any): any;
  setOutFloorSubs(a: any, f: any): void;
  getShops(): any;
  setRandomShopTypes(a: any, f: any): any;
  updateHmapTypes(a: any, f: any): void;
  setDimensionStorage(a: any, f: any): any;
  refillStorage(a: any): void;
  getRandomTargetData(a: any, f: any): any;
  convertCounterPos(a: any, f: any): any;
  getRandomKyotenRoom(): any;
  setAroundMap(a: any): void;
  getTownRandomPosition(a: any): any;
  setRoomBoroiMap(a: any): void;
  convertTatemonoKabe(a: any, f: any, h: any): any;
}

declare class tGameRoutineMap {
  parent: any;
  isRequireCanvasRefresh: any;
  refreshData: any;
  viewMapData: any;
  mode: any;
  modeData: any;
  player: any;
  oneActionData: any;
  isAction: any;
  frameActionEvent: any;
  frameKey: any;
  isDisposeClearPressKeys: any;
  moveCache: any;
  beforeSmallMapSize: any;
  cutActionWaitTimeRate: any;
  isOverCanvasView: any;
  init(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  setForceStopCallBack(a: any): void;
  deleteForceStopCallBack(a: any): void;
  issetForceStopCallBack(): any;
  setFrameAction(a: any): void;
  frameAction_dispose(a: any): void;
  frameAction_frame(a: any): void;
  frameAction_draw(a: any, c: any): void;
  updateLastConvertMapData(a: any): void;
  clearOneActionSyncAction(): void;
  oneAction(a: any, c: any, b: any, e: any, d: any, g: any): void;
  oneActionAfterFinishAction(a: any): any;
  oneActionAfter(a: any): any;
  viewEffectLog(a: any): void;
  oneActionForce(a: any, c: any): void;
  oneActionWalkAnimation(a: any): void;
  oneActionWalk(a: any): any;
  updateLookMap(a: any): void;
  convertObjectLookMap(a: any): any;
  updateLookMapTarget(a: any, c: any, b: any): void;
  updateLookMapAll(): void;
  updateLookMapDarkAll(): void;
  updateFovTargets(): any;
  viewSmallMap(a: any): void;
  affectTarget(a: any): any;
  clearDiaonalCanvas(): void;
  drawArrow(): void;
  setMode(a: any, c: any): void;
  getFootMessageData(a: any, c: any): any;
  viewPlayerPositionLog(): any;
  viewPlayerPositionOverlookLog(): void;
  getCanMovePositions(a: any, c: any, b: any, e: any): any;
  viewMap(a: any, c: any, b: any, e: any, d: any, g: any): any;
  viewMap_action(a: any, c: any, b: any, e: any, d: any, g: any): any;
  viewMapEvent(a: any): void;
  setPlayerPosition(a: any, c: any): any;
  drawForce(a: any): void;
  edgeMove(a: any, c: any, b: any): any;
  getMapType(): any;
  actionPlayerAutoTurn(a: any): any;
  breakMap(a: any, c: any, b: any, e: any, d: any): any;
  checkPlayerTeamTimeLimit(a: any): any;
  getPositionAffectList(a: any, c: any): any;
  addFinishAction(a: any): any;
  yubakuAction(a: any, c: any): void;
  attackDamageAction(a: any, c: any, b: any): void;
  attackKaihiAction(a: any, c: any, b: any): void;
  etcAfterAction(a: any, c: any): void;
  updateMapCharactorStatus(): any;
  updateMapInfoAll(a: any): void;
  isInViewFrame(a: any, c: any): any;
  playerDeathEvent(): any;
  kanpaAction(a: any): any;
  viewLinkMap(a: any): any;
  viewBackLinkMap(a: any): any;
  playerAutoFootPickupItem(): any;
  checkSpecialFlg(a: any, c: any): any;
  getUtime(): any;
  setTurnTimeFrameAction(a: any, c: any): void;
  changeOverCanvasView(a: any): void;
  setAutoOnmitsu(a: any): void;
}

declare class tGameRoutineMapMove {
  parent: any;
  isAction: any;
  callBack: any;
  init(a: any): void;
  move(a: any): any;
  setFrameAction(a: any): void;
  frameAction_dispose(a: any): void;
  frameAction_frame(a: any, n: any): void;
  frameAction_draw(a: any, n: any): void;
}

declare class tGameRyourifukuro {
  parent: any;
  data: any;
  itemType: any;
  itemIds: any;
  init(b: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(b: any): any;
  addItem(b: any): any;
  removeItem(b: any, c: any): any;
  inCharaItem(b: any, c: any, a: any): any;
  outCharaItem(b: any, c: any, a: any, d: any): any;
  azukeru(b: any): void;
  toridasu(b: any, c: any): void;
  taberu(b: any, c: any): void;
  view(b: any, c: any): void;
  getRyouriShunoMikanteiItems(): any;
  getRyouriShunoNoroiItems(): any;
  kanteiItem(b: any, c: any, a: any): any;
  noroikeshiItem(b: any, c: any, a: any): any;
  npcHoju(b: any, c: any): void;
}

declare class tGameSave {
  parent: any;
  saveNumber: any;
  saveMaxNum: any;
  separate: any;
  downloadLink: any;
  importData: any;
  gcDefKey: any;
  headerData: any;
  gzipWorker: any;
  gunzipWorker: any;
  gzipCallBack: any;
  gunzipCallBack: any;
  init(a: any): void;
  setSaveNumber(a: any): void;
  getHeaderData(a: any): any;
  convertSaveData(a: any): any;
  zipData(a: any): any;
  zipDataWorker(a: any, b: any): void;
  unzipData(a: any): any;
  unzipDataWorker(a: any, b: any): void;
  initSaveData(): any;
  getSaveData(): any;
  getSaveKey(a: any): any;
  removeSaveData(a: any, b: any): void;
  save(a: any, b: any): void;
  saveSuspended(a: any): void;
  saveAndDownload(a: any): void;
  getSaveHeaders(a: any): void;
  splitSaveData(a: any): any;
  loadAct(a: any, b: any, c: any, f: any): any;
  loadSuspended(a: any, b: any): void;
  load(a: any, b: any): void;
  convertBase64ToUint8Array(a: any): any;
  getFileData(a: any): void;
  localstorageSetItem(a: any, b: any, c: any): any;
  localstorageGetItem(a: any, b: any): any;
  localstorageGetItemHeader(a: any, b: any): any;
  localstorageRemoveItem(a: any, b: any): any;
  localstorageGetKeys(a: any): any;
  setClearData(a: any, b: any): any;
  exportLocalStorageData(a: any): void;
  importLocalStorageData(a: any, b: any): any;
  selectImportLocalStorageDataFile(a: any): void;
  clearImportLocalStorageDataFile(a: any): void;
  selectedImportLocalStorageDataFile(a: any): any;
}

declare class tGameSchoolGenerator {
  parent: any;
  init(a: any): void;
  createSchoolWithLoad(a: any, k: any): void;
  createSchool(a: any, k: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  setGaito(a: any): void;
}

declare class tGameSelectBgmWindow {
  parent: any;
  init(a: any): void;
  getBgmItems(a: any): any;
  view(a: any): void;
}

declare class tGameSelectFovTarget {
  parent: any;
  modes: any;
  mode: any;
  viewData: any;
  cursor: any;
  hiddenCanvases: any;
  init(a: any): void;
  viewSelectTarget(a: any, c: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  changeTarget(a: any): any;
}

declare class tGameSelectFovTargetSkill {
  parent: any;
  viewData: any;
  cursor: any;
  hiddenCanvases: any;
  init(b: any): void;
  viewSelectTarget(b: any, a: any, g: any, e: any): void;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  changeTarget(b: any): any;
  drawTarget(): void;
}

declare class tGameSelectImageTarget {
  parent: any;
  viewData: any;
  cvs: any;
  ctx: any;
  cucvs: any;
  cuctx: any;
  cursor: any;
  margin: any;
  init(a: any): void;
  viewSelectTargetWindow(a: any, b: any, d: any): void;
  clear(): void;
  getOnePageData(a: any): any;
  getOneSize(a: any): any;
  drawPage(): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  changeTarget(a: any): any;
  drawCursor(): void;
}

declare class tGameSelectTarget {
  parent: any;
  viewData: any;
  init(a: any): void;
  view(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  selectPosition(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawArrow(a: any): void;
  clearCanvas(): void;
}

declare class tGameSelectWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewCharactorRuleMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewWindow(a: any, b: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  drawTextColumnData(a: any, b: any): void;
  drawSelectColumnData(a: any, b: any): void;
  drawFaceColumnData(a: any, b: any): void;
  drawChipsetColumnData(a: any, b: any): void;
  drawChipsetItemColumnData(a: any, b: any): void;
  changeSelectColumnItem(a: any): void;
  changeFaceColumnItem(a: any): void;
  changeChipsetColumnItem(a: any): void;
  changeChipsetItemColumnItem(a: any): void;
  getColumnLabelHeight(a: any, b: any, c: any): any;
  drawColumnData(a: any, b: any): any;
  okButtonColumnItem(a: any): any;
}

declare class tGameSfpc {
  parent: any;
  init(b: any): void;
  view(b: any, d: any): void;
  act(b: any): any;
}

declare class tGameShitaiasari {
  parent: any;
  init(b: any): void;
  tryCreate(b: any): any;
  oneActionFinishAction(b: any, a: any, c: any): void;
  oneActionFinishAction_shitaiasarifirst(b: any, a: any): any;
  oneActionFinishAction_shitaiasariinmap(b: any, a: any): void;
  oneActionFinishAction_shitaiasarichecktimeout(b: any, a: any): any;
  viewMap(b: any): void;
  deleteCharactor(): any;
  selectAnswer(b: any): any;
  affectAnswer(b: any): void;
  createTargetMap(): any;
  affectEnemyHone(b: any, a: any): void;
  timeoutEvent(b: any): void;
}

declare class tGameShokuzaifukuro {
  parent: any;
  data: any;
  types: any;
  init(c: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(c: any): any;
  addItem(c: any): any;
  removeItem(c: any, b: any, a: any): any;
  inCharaItem(c: any, b: any, a: any): any;
  outCharaItem(c: any, b: any, a: any, d: any): any;
  enableAzukeru(c: any): any;
  azukeru(c: any): void;
  toridasu(c: any, b: any): void;
  view(c: any, b: any): void;
  getShokuzaiShunoMikanteiItems(): any;
  getShokuzaiShunoNoroiItems(): any;
  kanteiItem(c: any, b: any, a: any): any;
  noroikeshiItem(c: any, b: any, a: any): any;
  searchItemId(c: any, b: any): any;
}

declare class tGameShop {
  parent: any;
  init(b: any): void;
  checkNewItem(b: any, a: any): any;
  buy(b: any): any;
  sell(b: any): any;
  newItem(b: any): void;
  getLevelToStoreLevel(b: any, a: any): any;
  getStoreMaxLevel(b: any): any;
  isStoreLevelAnswer(b: any): any;
  getShopRankPlus(b: any): any;
  getRankUpPrice(b: any, a: any): any;
  shopLevelUp(b: any): void;
  getStoreScaleSpace(b: any): any;
  isStoreScaleAnswer(b: any): any;
  shopScaleUp(b: any): any;
}

declare class tGameShortCut {
  parent: any;
  maxNum: any;
  init(b: any): void;
  getShortCut(): any;
  setShortCutIdx(b: any, e: any, a: any, d: any): any;
  getShortCutIdx(b: any, e: any): any;
  actionShortCutIdx(b: any, e: any): any;
}

declare class tGameShortEvent {
  parent: any;
  chips: any;
  init(c: any): void;
  initLoad(c: any): void;
  loadLinkJson(c: any): void;
  initChipData(): void;
  encount(c: any): any;
  drawBackground(c: any, b: any, a: any): void;
  choise(c: any): void;
  choise_allmember(c: any): void;
  choise_default(c: any): void;
  choise_act(c: any, b: any): void;
  choise_act_original(c: any, b: any): void;
  choise_act_escape(c: any, b: any): void;
  statusHenka(c: any): void;
  escape(c: any): void;
  finishNokoru(c: any): void;
  finishMessage(c: any, b: any): void;
  finishMessage2(c: any, b: any): void;
  getRandomCharactor(): any;
  getAllMember(): any;
  getAroundSpaces(c: any, b: any): any;
  getAroundSpacesTargetNum(c: any, b: any, a: any): any;
  getAroundSpace(c: any): any;
  choise_act_original_act_0001_0001(c: any, b: any): void;
  choise_act_original_act_0001_0002(c: any, b: any): void;
  choise_act_original_act_0001_0003(c: any, b: any): void;
  choise_act_original_act_0002_0001(c: any, b: any): void;
  choise_act_original_act_0002_0002(c: any, b: any): void;
  choise_act_original_act_0002_0003(c: any, b: any): void;
  choise_act_original_act_0003_0001(c: any, b: any): void;
  choise_act_original_act_0003_0002(c: any, b: any): void;
  choise_act_original_act_0003_0003(c: any, b: any): void;
  choise_act_original_act_0004_0001(c: any, b: any): void;
  choise_act_original_act_0004_0002(c: any, b: any): void;
  choise_act_original_act_0004_0003(c: any, b: any): void;
  choise_act_original_act_0005_0001(c: any, b: any): void;
  choise_act_original_act_0005_0002(c: any, b: any): void;
  choise_act_original_act_0006_0001(c: any, b: any): void;
  choise_act_original_act_0006_0002(c: any, b: any): void;
  choise_act_original_act_0007_0001(c: any, b: any): void;
  choise_act_original_act_0008_0001(c: any, b: any): void;
  choise_act_original_act_0009_0001(c: any, b: any): void;
  choise_act_original_act_0009_0002(c: any, b: any): void;
  choise_act_original_act_0010_0001(c: any, b: any): void;
  choise_act_original_act_0010_0002(c: any, b: any): void;
  choise_act_original_act_0011_0001(c: any, b: any): void;
  choise_act_original_act_0011_0002(c: any, b: any): void;
  choise_act_original_act_0012_0001(c: any, b: any): void;
  choise_act_original_act_0012_0002(c: any, b: any): void;
  choise_act_original_act_0013_0001(c: any, b: any): void;
  choise_act_original_act_0013_0002(c: any, b: any): void;
  choise_act_original_act_0013_0003(c: any, b: any): void;
  choise_act_original_act_0014_0001(c: any, b: any): void;
  choise_act_original_act_0015_0001(c: any, b: any): void;
  choise_act_original_act_0015_0002(c: any, b: any): void;
  choise_act_original_act_0016_0001(c: any, b: any): void;
  choise_act_original_act_0017_0001(c: any, b: any): void;
  choise_act_original_act_0018_0001(c: any, b: any): void;
  choise_act_original_act_0018_0002(c: any, b: any): void;
}

declare class tGameShukkabako {
  parent: any;
  data: any;
  init(b: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(b: any): any;
  createShukkabako(b: any): any;
  viewWindow(b: any): void;
  viewDefault(b: any, a: any): void;
  uru(b: any): void;
  addShopSeed(b: any): any;
  kau(b: any): void;
  hoju(): any;
}

declare class tGameSkill {
  parent: any;
  skillData: any;
  npcSkills: any;
  init(c: any): void;
  initLoad(c: any): void;
  getExp(c: any, a: any): any;
  getLevelToExp(c: any, a: any, d: any): any;
}

declare class tGameSkillAction {
  parent: any;
  iconData: any;
  askillData: any;
  rankMagics: any;
  rankPhysics: any;
  init(a: any): void;
  initLoad(a: any): void;
  setRankAskills(): void;
  setRankAskills2(): void;
  getSkillName(a: any): any;
  convertSkillData(a: any): any;
  getSkillLanges(a: any, m: any): any;
  calSkillArea(a: any, m: any, e: any): any;
  viewEffect(a: any, m: any, e: any, d: any, n: any, t: any, u: any, w: any): void;
  getSkillType(a: any): any;
  getTakeSkillActionResult(): any;
  takeSkillAction_summon(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_summonboss(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_summonanimal(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_battlereset(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_teamonmitsu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_allkanpa(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_alerm(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_cure(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_rcure(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_removecondition(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_badcondition(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_badcondition2(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_badcondition3(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_badcondition4(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_goodcondition(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_addcounter(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_bukizokusei(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_grantup(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_grantdown(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_grantrateup(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_tetsuya(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_grantratedown(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_cdtdamage(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mcure(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mmcure(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mcureremovecondition(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mcurebadcondition(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_statusupbadcondition(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_attack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_food(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_light(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_warmeirei(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_warbomb(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_teleport(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_teleport2(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_poschange(a: any, m: any, e: any, d: any, n: any, t: any): any;
  takeSkillAction_possekkin(a: any, m: any, e: any, d: any, n: any, t: any): any;
  takeSkillAction_poschikaduke(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_chohatsu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_shugo(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mitoosenu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_breaktrap(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_tagayasu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_farmsodatsu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_farmoishiku(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mizumaki(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_seed(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_cookstart(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_chogostart(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_enchantmentstart(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_blacksmithstart(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_equiprankupstart(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_nejitaku(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_agechange(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_fspplus(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_fspminus(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_fspplus2(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_fspminus2(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_statusgrowth(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_statusgrowthlimit(a: any, m: any, e: any, d: any, n: any): any;
  createID(): any;
  updateSkill(a: any, m: any): any;
  createSkill(a: any): any;
  getExp(a: any, m: any): any;
  takeSkillAction_remote(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_shindou(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_bougen(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_remotebomb(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_statusup(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_statusdown(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_nanimoshinai(a: any, m: any, e: any, d: any, n: any): any;
  getDescription(a: any, m: any): any;
  takeSkillAction_bakuhatsu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_bakuhatsu2(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_yubaku(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_bombbakuhatsu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_music(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_hungry(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_damage(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_curse(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_rust(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_equipreinforce(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_equipkeiryoka(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_equipjuryoka(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_sennotobashi(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_sekkinattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_shuryo(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_setreuse(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_poschangeattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_haisuiattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_mettazashi(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_gaichu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_nantokaball(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_nantokabomb(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_setsuri(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_shittoattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_yumekuiattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_noroiattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_daichiattack(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_seimeisui(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_wariaidamage(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_randomspd(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_chokasoku(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_jigenyugami(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_pandorabox(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_zentaishiji(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_skillexp(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_randomkantei(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_randomnoroikeshi(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_noroitaiseiplus(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_jakukataiseiplus(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_noroitaiseiminus(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_jakukataiseiminus(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_enemykanyu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_bomb(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_fukitobasu(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_tosshin(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_createtrap(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_newskill(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_droprandomskill(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_skilllevelup(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_souden(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_henshin(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_hbook(a: any, m: any, e: any, d: any, n: any): any;
  takeSkillAction_askillwakuplus(a: any, m: any, e: any, d: any, n: any): any;
  shokujiResult(a: any, m: any): any;
  getMusicCondition(): any;
  getMusicActionCondition(): any;
  getScrollCondition(): any;
  getMagicCondition(): any;
  getActionCondition(): any;
  getLevelToRank(a: any, m: any): any;
  judgeCreateSkill(a: any): any;
  getKeishoRate(a: any, m: any, e: any, d: any): any;
  getVal(a: any, m: any, e: any): any;
  checkTargetEquipment(a: any, m: any): any;
  createItemSkill(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction(a: any, m: any, e: any, d: any): any;
  judgeAttackKaihiAction(a: any, m: any, e: any, d: any): any;
  getLuckRate(a: any, m: any, e: any): any;
  judgeAttackKaihiAction_kaihiToTargetChara(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction_toTargetChara(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction_toTargetCharaPhysicsLong(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction_toTargetCharaElementalCounter(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction_toTargetCharaElemental2Counter(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction_toMyself(a: any, m: any, e: any, d: any, n: any): any;
  judgeAttackDamageAction_toMyselfDying(a: any, m: any, e: any, d: any, n: any): any;
  isUseAction(a: any, m: any, e: any): any;
  getNewSkillLevel(a: any, m: any): any;
  updateNantokaBall(a: any): void;
  updateNantokaBomb(a: any): void;
  useSkillActionBefore(a: any, m: any, e: any, d: any, n: any, t: any, u: any, w: any, p: any, b: any, h: any): void;
}

declare class tGameSkillActionBook {
  parent: any;
  randomTargets: any;
  init(c: any): void;
  initLoad(c: any): void;
  createRandomItem(c: any): any;
  createItem(c: any): any;
}

declare class tGameSkillActionInfoWindow {
  parent: any;
  cvs: any;
  ctx: any;
  fontSize: any;
  init(a: any): void;
  viewInfoWindow(a: any): any;
}

declare class tGameSkillActionWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewSkillMaxNum: any;
  cursor: any;
  init(a: any): void;
  clear(): void;
  viewSkillActionWindow(a: any, c: any): any;
  drawPage(a: any): void;
  getCursor(a: any): any;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  clearCanvas(): void;
  setCursor(a: any): any;
  getSkillActionShortCuts(): void;
  viewBottomWindow(): any;
  updateSkills(a: any): void;
}

declare class tGameSkillInfoWindow {
  parent: any;
  cvs: any;
  ctx: any;
  fontSize: any;
  init(b: any): void;
  viewInfoWindow(b: any): any;
}

declare class tGameSkillShop {
  parent: any;
  init(b: any): void;
  checkNewItem(b: any): any;
  buyPlayerTeam(b: any): any;
  buy(b: any): any;
}

declare class tGameSkillWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewSkillMaxNum: any;
  cursor: any;
  init(b: any): void;
  clear(): void;
  viewSkillWindow(b: any, c: any): any;
  drawPage(b: any): void;
  getCursor(b: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
  setCursor(b: any): any;
}

declare class tGameSlaveShop {
  parent: any;
  init(b: any): void;
  checkNewItem(b: any): any;
  createSlaveCharactor(b: any): any;
  buy(b: any): any;
}

declare class tGameSleep {
  parent: any;
  init(c: any): void;
  initLoad(c: any): void;
  sleep(c: any, g: any): void;
  sleepInn(c: any, g: any): void;
  sleepAction(c: any, g: any, a: any, d: any): void;
  getTogetherCharas(): any;
  sleepTogether(c: any, g: any): void;
  getSleepTime(c: any, g: any): any;
  sleepSave(c: any): any;
}

declare class tGameSlot {
  parent: any;
  data: any;
  img: any;
  objs: any;
  viewData: any;
  reelNum: any;
  reels: any;
  init(a: any): void;
  getPlayerCoin(): any;
  initFrame(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  updateMymoney(): void;
  getMatchLines(a: any): any;
  view(a: any): void;
  clear(): void;
  startGame(): void;
  finishGame(): void;
  choseiBet(): void;
  animationGetCoin(a: any): void;
  hit(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  drawBet(): void;
  drawGaming(): void;
}

declare class tGameSlotReel {
  parent: any;
  objs: any;
  viewData: any;
  init(a: any): void;
  initFrame(): void;
  clearGame(): void;
  updateReel(a: any, b: any): any;
  setReelIcon(a: any, b: any): void;
  moveReel(a: any): void;
  stopReel(): void;
}

declare class tGameSlumGenerator {
  parent: any;
  init(a: any): void;
  createSlumWithLoad(a: any, h: any): void;
  createSlum(a: any, h: any): any;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
}

declare class tGameSoubifukuro {
  parent: any;
  max: any;
  nameMaxLength: any;
  init(b: any): void;
  getEquipList(): any;
  searchTargetEquipment(b: any): any;
  view(b: any, d: any): void;
  isEnableRegistEquips(): any;
  registEquips(b: any): any;
  soubihazusu(b: any): any;
  soubiyobidasu(b: any, d: any): void;
  getItemDescription(b: any, d: any): any;
}

declare class tGameSoundResource {
  parent: any;
  soundData: any;
  playSounds: any;
  oggOrM4a: any;
  caches: any;
  init(a: any): void;
  loadSound(a: any): void;
  initLoad(a: any): void;
  allLoad(a: any): void;
  getAudio(a: any): any;
  loadPreload(a: any): void;
  getPath(a: any): any;
  loadBuffer(a: any): any;
  play(a: any, b: any): any;
  setVolume(a: any): any;
  reflectOption(a: any): void;
}

declare class tGameSozaifukuro {
  parent: any;
  data: any;
  types: any;
  init(d: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(d: any): any;
  addItem(d: any): any;
  removeItem(d: any, b: any, a: any): any;
  inCharaItem(d: any, b: any, a: any): any;
  outCharaItem(d: any, b: any, a: any, c: any): any;
  azukeru(d: any): void;
  toridasu(d: any, b: any): void;
  view(d: any, b: any): void;
  getSozaiShunoMikanteiItems(): any;
  getSozaiShunoNoroiItems(): any;
  kanteiItem(d: any, b: any, a: any): any;
  noroikeshiItem(d: any, b: any, a: any): any;
  searchItemId(d: any, b: any): any;
}

declare class tGameSpecialMap {
  parent: any;
  init(a: any): void;
  initLoad(a: any): void;
  createQuest1Map(a: any, n: any): any;
  createQuest9Map(a: any, n: any): any;
  createFreeMap(a: any): any;
  createFreeMap_act(a: any): any;
  setWood(a: any): void;
  setStone(a: any): void;
  setToboku(a: any): void;
  setSaboten(a: any): void;
  setKirikabu(a: any): void;
  setItem(a: any): void;
  getFreeMapStartPosition(a: any, n: any): any;
}

declare class tGameStatusWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  cursor: any;
  pagesMaster: any;
  pages: any;
  dcvs: any;
  dctx: any;
  pcvs: any;
  pctx: any;
  init(f: any): void;
  clear(): void;
  viewStatusWindow(f: any, k: any): any;
  drawTable(f: any): any;
  drawProfile(): any;
  drawDefcdt(): any;
  drawCondition(): any;
  drawPage(f: any): any;
  drawPage_main(f: any): void;
  drawPage_defcdt(f: any): void;
  drawPage_condition(f: any): void;
  setFrameEvent(f: any): void;
  setFrameEvent_dispose(f: any): void;
  setFrameEvent_frame(f: any): void;
  setFrameEvent_draw(f: any): void;
  clearCanvas(): void;
  updateStatus(): void;
}

declare class tGameSteal {
  parent: any;
  data: any;
  img: any;
  viewData: any;
  size: any;
  skillId: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  view(a: any, b: any): void;
  setGameData(): void;
  clear(a: any): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): any;
  setFrameEvent_draw(a: any): void;
  getBlockPosition(a: any): any;
  getAroundCharaData(a: any): any;
}

declare class tGameStg {
  parent: any;
  data: any;
  img: any;
  objs: any;
  viewData: any;
  tGameStgBg: any;
  tGameStgShoot: any;
  tGameStgObject: any;
  tGameStgScene: any;
  tGameStgEnemy: any;
  tGameStgPoint: any;
  size: any;
  init(a: any): void;
  initLoad(a: any): void;
  loadLinkJson(a: any): void;
  initFrame(a: any): void;
  view(a: any): void;
  clear(): void;
  setFrameEvent(a: any): void;
  setFrameEvent_dispose(a: any): void;
  setFrameEvent_frame(a: any): void;
  setFrameEvent_draw(a: any): void;
  inputKey(a: any): void;
  gameOver(): void;
  gameClear(): void;
}

declare class tGameStgBg {
  parent: any;
  stars: any;
  init(): void;
  update(a: any): void;
  draw(): void;
}

declare class tGameStgShoot {
  parent: any;
  playerWaitTime: any;
  init(a: any): void;
  addShoot(a: any): any;
  addShoot_1(a: any): void;
  update(a: any, b: any): void;
}

declare class tGameStgObject {
  parent: any;
  removeObject(a: any): void;
  addObject(a: any): any;
  updateSize(a: any): void;
  update(a: any): void;
  bombUpdate(a: any, b: any): void;
  draw(): void;
  drawOne(a: any): void;
  clash(a: any): any;
  clash2Objects(a: any, b: any): any;
  powerMinus(a: any, b: any): any;
}

declare class tGameStgScene {
  parent: any;
  scenes: any;
  init(): void;
  update(a: any): void;
}

declare class tGameStgEnemy {
  parent: any;
  addEnemy(a: any): any;
  addEnemy_1(a: any): void;
  addEnemy_2(a: any, b: any): void;
  addEnemy_4(a: any, b: any): void;
  addEnemy_6(a: any, b: any): void;
  addEnemy_7(a: any): void;
  addEnemy_8(a: any): void;
  addEnemy_9(a: any): void;
  update(a: any, b: any): void;
  shoot_time(a: any): void;
  shoot_boss(a: any): void;
  createShoot(a: any, b: any): void;
}

declare class tGameStgPoint {
  parent: any;
  draw(): void;
}

declare class tGameStorage {
  parent: any;
  data: any;
  init(b: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(b: any): any;
  createStorage(b: any): any;
  viewWindow(b: any): any;
  initTalk(b: any): void;
  viewDefault(b: any, d: any): void;
  viewArrears(b: any): void;
  pay(): void;
  getItemNum(): any;
  payArrearsMoney(b: any): void;
  addItem(b: any): any;
  removeItem(b: any, d: any, a: any): any;
  inCharaItem(b: any, d: any, a: any): any;
  outCharaItem(b: any, d: any, a: any, c: any): any;
  outOkuItem(b: any, d: any, a: any): any;
  azukeru(b: any): void;
  toridasu(b: any, d: any): void;
  selectItem(b: any): void;
  help(b: any): void;
  maoupay(b: any, d: any): void;
  fusaiShometsu(): any;
  sortItems(b: any): void;
  setSortType(b: any, d: any): void;
  setSortTypeWindow(b: any, d: any): void;
  fixKakeraGroup(): void;
  searchItemId(b: any, d: any): any;
}

declare class tGameStoryWindow {
  parent: any;
  fontSize: any;
  textSpace: any;
  init(b: any): void;
  clearCanvas(): void;
  view(b: any): any;
  drawDetail(b: any): void;
  getDetail_god(): any;
  getDetail_megamiev(): any;
  getDetail_kaichoev(): any;
  getDetail_yushaev(): any;
  getDetail_sozaiev(): any;
  getDetail_kingev(): any;
  getDetail_kenkyuevent(): any;
  getDetail_elfevent(): any;
  getDetail_magicalgirl(): any;
  getDetail_guildev(): any;
  getDetail_gakushaev(): any;
  getDetail_byoinev(): any;
  getDetail_yureigl(): any;
  getDetail_oujiev(): any;
  getDetail_tenshokudn(): any;
  getDetail_oshitsuke(): any;
  getDetail_jashin(): any;
}

declare class tGameSubTown {
  parent: any;
  max: any;
  init(a: any): void;
  getSubTownName(a: any): any;
  getChipData(a: any): any;
  setSubTown(a: any, b: any): any;
  createSubTownWithLoad(a: any, b: any): void;
  moveSubTown(a: any): any;
  createSubTown(a: any, b: any): void;
  actionPattern(a: any): any;
  updateActionPattern(a: any): any;
  actionPatternOne(a: any): any;
  viewMenuWindow(a: any): void;
  gotoSubTown(a: any, b: any): any;
  checkUpdateMap(a: any): any;
  affectCharactor(a: any): any;
}

declare class tGameTableTalk {
  parent: any;
  viewData: any;
  init(e: any): void;
  view(e: any, a: any): any;
  viewSelectChara(): void;
  talk(e: any): any;
  talkStart(e: any): void;
}

declare class tGameTalkResource {
  parent: any;
  talkData: any;
  emptyMsg: any;
  init(d: any): void;
  getCharaPlayerRelationKey(d: any): any;
  convertTalk(d: any, e: any, f: any): any;
  getChoiseMessage(d: any, e: any): any;
  getChoiseJoinTeamMessage(d: any, e: any, f: any, c: any): any;
  getChoiseRequestMyTownMessage(d: any, e: any, f: any, c: any): any;
  getChoiseRemoveTeamMessage(d: any, e: any, f: any, c: any): any;
  getChoiseQuestMessage(d: any, e: any, f: any, c: any): any;
  getChoiseQuestConfirmMessage(d: any, e: any): any;
  getChoiseQuestFinishMessage(d: any, e: any): any;
  getChoiseQuestFailureMessage(d: any, e: any): any;
  getChoiseNotItemMessage(d: any, e: any): any;
  getChoiseNohinItemMessage(d: any, e: any): any;
  getFukidashiMssage(d: any, e: any): any;
  getCommonFukidashiMssage(d: any, e: any, f: any): any;
  getChoiseCondition(d: any, e: any): any;
  convertValue(d: any, e: any, f: any): any;
  initLoad(d: any): void;
  loadEventTalk(d: any, e: any): any;
  getRescueChoiseMessage(d: any): any;
  getRescueSuccessChoiseMessage(d: any): any;
  getFreeChoiseMessage(d: any, e: any, f: any): any;
  getFreeChoiseMessage2(d: any, e: any, f: any, c: any): any;
  getFreeChoiseMessage3(d: any, e: any, f: any, c: any, a: any): any;
  getFreeChoiseMessageList(d: any, e: any, f: any, c: any): any;
  viewKnockDownChoiseMessage(d: any, e: any): any;
  viewKnockDownCheerChoiseMessage(d: any, e: any): any;
  getQuest4SuccessChoiseMessage(d: any): any;
  getQuest4FailureChoiseMessage(d: any): any;
  getChoiseRequestRemoveMyTownMessage(d: any, e: any): any;
  getChoiseRequestRelationMessage(d: any, e: any, f: any, c: any): any;
  getCommonTalk(d: any, e: any, f: any): any;
  getTalkMessage(d: any, e: any, f: any): any;
  getAroundTalks(d: any): any;
  encodeMyTalkData(d: any): any;
  decodeMyTalkData(d: any): any;
  removeMyTlkDataToTalkData(d: any): void;
  setMyTlkDataToTalkData(d: any, e: any): any;
  loadMyTalkDataRange(d: any): void;
  loadMyTalkData(d: any): void;
  loadTargetMyTalkData(d: any, e: any): void;
  getTableTalkMessage(d: any, e: any, f: any): any;
  getSleepTogetherMessage(d: any, e: any, f: any): any;
}

declare class tGameText {
  parent: any;
  colorData: any;
  cvs: any;
  ctx: any;
  textSpace: any;
  lineHeight: any;
  init(a: any): void;
  setFont(a: any, g: any, k: any): void;
  createText(a: any): any;
  createDamageText(a: any): any;
  initLoad(a: any): void;
}

declare class tGameTextInputWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  wcvs: any;
  wctx: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  viewData: any;
  textBox: any;
  init(b: any): void;
  viewTextInputWindow(b: any, d: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
}

declare class tGameTime {
  parent: any;
  cvs: any;
  ctx: any;
  isRequireRefresh: any;
  lastRect: any;
  init(a: any): void;
  setRefreshFlg(): void;
  getNow(): any;
  viewAmpm(a: any): void;
  getTimeToWaitTime(a: any): any;
  addTime(a: any, b: any, d: any): void;
  getZeroDate(a: any): any;
  getDate(a: any): any;
  calAge(a: any, b: any): any;
  getBirthDayToTime(a: any, b: any, d: any): any;
  createBiarthday(a: any, b: any): any;
  drawTime(): any;
  viewTime(): any;
  frameActionDraw(a: any): any;
  getTimeGroup(a: any): any;
  get6Time(a: any): any;
  setPlayTime(a: any): any;
  getTargetTimeText(a: any): any;
  setTimeBgm(a: any, b: any): any;
  setAdvanceTime(a: any): any;
}

declare class tGameTitle {
  parent: any;
  images: any;
  init(c: any): void;
  initLoad(c: any): void;
  viewTitle(): void;
  drawBackground(c: any, b: any): any;
  drawBackground_etc(c: any, b: any): any;
  drawBackground_title(c: any): void;
}

declare class tGameTitleWindow {
  parent: any;
  textMaxWidth: any;
  views: any;
  ccvs: any;
  cctx: any;
  fontSize: any;
  textSpace: any;
  viewData: any;
  viewItemMaxNum: any;
  cursor: any;
  clearBottomData: any;
  init(b: any): void;
  clear(): void;
  viewSaveWindow(b: any, a: any, d: any): void;
  drawPage(b: any): void;
  getCursor(b: any): any;
  setFrameEvent(b: any): void;
  setFrameEvent_dispose(b: any): void;
  setFrameEvent_frame(b: any): void;
  setFrameEvent_draw(b: any): void;
  clearCanvas(): void;
  setCursor(b: any): any;
  selectItem(b: any): void;
  deleteSave(b: any): void;
  updateItems(b: any): void;
  newGameBefore(b: any): void;
  newGame(b: any, a: any): void;
  startNewGame(b: any, a: any, d: any): void;
  viewError(b: any): void;
  checkMismatchSaveData(b: any): any;
  checkMismatchVersionSaveData(b: any): any;
}

declare class tGameTougijo {
  parent: any;
  data: any;
  init(c: any): void;
  initLoad(c: any): void;
  gotoBattleMap(c: any, a: any): any;
  createMap(): any;
  entry(c: any): void;
  escapeBattle(c: any): any;
  setBackMapData(): any;
  setEnemy(c: any, a: any): any;
  victoryBattle(c: any): any;
  oneActionFinishAction(c: any, a: any, b: any): void;
  oneActionFinishAction_victorybattle(c: any, a: any): any;
  getHoshu(c: any, a: any): any;
  getRankToLevel(c: any): any;
  getRankToMoney(c: any, a: any): any;
  updateHoshu(): any;
}

declare class tGameTownGenerator {
  parent: any;
  townTypes: any;
  init(c: any): void;
  createTownWithLoad(c: any, m: any): void;
  createTown(c: any, m: any): any;
  actionPattern(c: any): any;
  updateActionPattern(c: any): any;
  actionPatternOne(c: any): any;
  setYukiObjects(c: any): void;
}

declare class tGameTrap {
  parent: any;
  trapTypes: any;
  init(b: any): void;
  convertData(b: any): any;
  getRandomTrapToObject(b: any): any;
  getTrapToObject(b: any, e: any): any;
  getTrapObjectId(b: any): any;
  getTrapName(b: any): any;
  oneActionTrap(b: any): any;
  affect(b: any): any;
  runTrap(b: any, e: any): any;
  tryBreak(b: any): void;
}

declare class tGameTutorial {
  parent: any;
  talkData: any;
  viewData: any;
  hiddenCanvases: any;
  init(a: any): void;
  initLoad(a: any): void;
  updateLock(a: any, c: any, b: any): void;
  confirmView(a: any): void;
  createMap(a: any): any;
  viewPage1(): any;
  viewPage2(): any;
  viewPage3(): any;
  viewPage4(): any;
  viewPage5(): any;
  viewPage6(): any;
  viewPage7(): any;
  viewPage8(): any;
  viewPage9(): any;
  oneActionFinishAction(a: any, c: any, b: any): void;
  oneActionFinishAction_p1move(a: any, c: any): any;
  oneActionFinishAction_tutorialp5gekiha(a: any, c: any): void;
  oneActionFinishAction_tutorialp6gekiha(a: any, c: any): void;
  oneActionFinishAction_tutorialp7gekiha(a: any, c: any): void;
  createCharactor(): any;
  affectCharactor(a: any): any;
  affectCharactor_p2(a: any, c: any): void;
  affectCharactor_p3(a: any, c: any): void;
  affectCharactor_p4(a: any, c: any): void;
  edgeActionCallBack(a: any): any;
}

declare class tGameUniqueQuest {
  parent: any;
  init(b: any): void;
  viewMap(b: any): void;
  tryCreate(b: any): any;
  tryCreate_kantei(b: any): any;
  tryCreate_guild(b: any): any;
  tryCreate_ryoriya(b: any): any;
  tryCreate_mahouten(b: any): any;
  tryCreate_sakaba(b: any): any;
  tryCreate_seishokusha(b: any): any;
  tryCreate_nouka(b: any): any;
  tryCreate_kyoushi(b: any): any;
  tryCreate_kajiya(b: any): any;
  tryCreate_shonin(b: any): any;
  tryCreate_yadoya(b: any): any;
  tryCreate_shinan(b: any): any;
  getTargetChara(b: any, c: any, d: any): any;
  isCreate(b: any, c: any): any;
  actEventFinish(b: any, c: any, d: any): any;
  isEventNow(b: any, c: any): any;
  initEvEmptyData(b: any, c: any): void;
  setEvData(b: any, c: any, d: any): void;
  oneActionFinishAction(b: any, c: any, d: any): any;
  oneActionFinishAction_first(b: any, c: any, d: any): any;
  oneActionFinishAction_finish(b: any, c: any, d: any): any;
  oneActionFinishAction_ryoriya_enemy_nigetaka(b: any, c: any): any;
  oneActionFinishAction_uniquequestbossgekiha(b: any, c: any): any;
  oneActionFinishAction_seishokusha_hakahenka(b: any, c: any): any;
  oneActionFinishAction_kyoushi_wana(b: any, c: any): any;
  oneActionFinishAction_kajiya_hakai(b: any, c: any): any;
  getQuestKeys(b: any): any;
  getAffectAnswerKey(b: any): any;
  addAffectNonBattleAnswers(b: any): void;
  selectedAnswer(b: any, c: any): void;
  gotoQuestMap(b: any, c: any, d: any): void;
  gotoQuestMap_kantei(b: any, c: any, d: any): void;
  gotoQuestMap_guild(b: any, c: any, d: any): any;
  gotoQuestMap_ryoriya(b: any, c: any, d: any): void;
  gotoQuestMap_mahouten(b: any, c: any, d: any): any;
  gotoQuestMap_sakaba(b: any, c: any, d: any): any;
  gotoQuestMap_seishokusha(b: any, c: any, d: any): void;
  gotoQuestMap_nouka(b: any, c: any, d: any): any;
  gotoQuestMap_kyoushi(b: any, c: any, d: any): void;
  gotoQuestMap_kajiya(b: any, c: any, d: any): void;
  gotoQuestMap_shonin(b: any, c: any, d: any): any;
  gotoQuestMap_yadoya(b: any, c: any, d: any): any;
  gotoQuestMap_shinan(b: any, c: any, d: any): any;
}

declare class tGameVersion {
  parent: any;
  versions: any;
  init(a: any): void;
  checkEnableTargetSave(a: any): any;
}

declare class tGameWar {
  parent: any;
  data: any;
  fukidashi: any;
  myData: any;
  hiddenCanvases: any;
  objs: any;
  turnActionIdx: any;
  battleData: any;
  getSkillRates: any;
  buySkillRates: any;
  getSkillMax: any;
  cvs: any;
  ctx: any;
  init(a: any): void;
  initLoad(a: any): void;
  initSaveData(): void;
  getSaveData(): any;
  setSaveData(a: any): any;
  initFrame(a: any): void;
  createMap(a: any): any;
  setObject(a: any, b: any): void;
  createUnits(a: any): any;
  createUnit(a: any): any;
  viewQuest(a: any, b: any, c: any): any;
  test(a: any): any;
  setSubFrameEvent(a: any): void;
  setSubFrameEvent_dispose(a: any): void;
  setSubFrameEvent_frame(a: any): void;
  setSubFrameEvent_draw(a: any): void;
  viewMessage(a: any): void;
  hiddenMessage(): void;
  action(a: any): any;
  getTekiTeamId(a: any): any;
  getTekiMembers(a: any): any;
  getTargetTeamMembers(a: any): any;
  getTargetTeamTypeMembers(a: any, b: any): any;
  getTargetTeamTairetsuMembers(a: any, b: any): any;
  getForwardMembers(a: any, b: any): any;
  getCharasArea(a: any): any;
  getTargetArea(a: any): any;
  action_dokugiri(a: any, b: any): void;
  turnAction_setturnmessage(a: any, b: any): any;
  turnAction_zenshin(a: any, b: any): any;
  turnAction_zenshinforce(a: any, b: any): any;
  turnAction_koutai(a: any, b: any): any;
  turnAction_taiki(a: any, b: any): any;
  turnAction_dokugiri(a: any, b: any, c: any): any;
  turnAction_shubi(a: any, b: any): any;
  turnAction_shubiforce(a: any, b: any): any;
  turnAction_kobu(a: any, b: any): any;
  turnAction_odosu(a: any, b: any): any;
  turnAction_kaihi(a: any, b: any): any;
  turnAction_taiatari(a: any, b: any): any;
  turnAction_hikiyose(a: any, b: any): any;
  turnAction_jump(a: any, b: any): any;
  turnAction_jump2(a: any, b: any): any;
  turnAction_hikiyose2(a: any, b: any): any;
  turnAction_oshidashi(a: any, b: any): any;
  turnAction_kaifuku(a: any, b: any): any;
  turnAction_zcchange(a: any, b: any): any;
  turnAction_bomb(a: any, b: any): any;
  turnAction_bomb2(a: any, b: any): any;
  turnAction_kosan(a: any, b: any): any;
  turnAction_turn(a: any, b: any): any;
  turnAction_warteki(a: any, b: any): any;
  turnAction_edgeMikataMae(a: any, b: any): any;
  turnAction_edgeTekiMae(a: any, b: any): any;
  turnAction_edgeMikataUshiro(a: any, b: any): any;
  turnAction_edgeTekiUshiro(a: any, b: any): any;
  turnAction_shikiup(a: any, b: any): any;
  turnAction_shikiup2(a: any, b: any): any;
  turnAction_meireiblock(a: any, b: any): any;
  turnAction_turnOshidashi(a: any, b: any): any;
  turnAction(a: any): any;
  createFukidashi(a: any): any;
  stopViewMessage(a: any): void;
  viewSelectSkillWindow(a: any): void;
  addTurnActions(a: any): void;
  clearMeireiStatus(a: any): void;
  tekiAct(a: any): any;
  updateShiki(): void;
  updateHP(): void;
  getCharaHP(a: any): any;
  getHP(): any;
  getFinish(): any;
  finishAction(): any;
  edgeMaeAct(a: any, b: any): void;
  addShiki(a: any, b: any): void;
  addMeireiBlock(a: any, b: any): void;
  back(a: any): void;
  setQuestData(a: any): any;
  isMeireiBlock(a: any): any;
  setBuySkillRates(): void;
  getBuySkillRateSkill(): any;
  setGetSkillRates(): void;
  getGetSkillRateSkill(): any;
  getNewSkill(a: any, b: any): any;
  setTeamStatus(a: any, b: any): any;
  getStatusTurn(a: any): any;
  getLastActionTurn(a: any): any;
  setLastActionTurn(a: any): void;
  checkLastActionTurn(a: any, b: any): any;
  checkWartekiAction(a: any, b: any): any;
  checkWartekiAction_zenshin(a: any): any;
  checkWartekiAction_koutai(a: any): any;
  checkWartekiAction_dokugiri(a: any): any;
  checkWartekiAction_shubi(a: any): any;
  checkWartekiAction_taiki(a: any): any;
  checkWartekiAction_kobu(a: any): any;
  checkWartekiAction_odosu(a: any): any;
  checkWartekiAction_shikiup(a: any): any;
  checkWartekiAction_shikiup2(a: any): any;
  checkWartekiAction_meireiblock(a: any): any;
  checkWartekiAction_zenshinforce(a: any): any;
  checkWartekiAction_shubiforce(a: any): any;
  checkWartekiAction_jump2(a: any): any;
  checkWartekiAction_bomb2(a: any): any;
  checkWartekiAction_hikiyose2(a: any): any;
  checkWartekiAction_oshidashi(a: any): any;
  checkWartekiAction_zcchange(a: any): any;
  checkWartekiAction_kaifuku(a: any): any;
  checkWartekiAction_common1(a: any): any;
  warskillkau(a: any, b: any): void;
  checkTurnOshidashi(a: any): any;
}

declare class tGameWeading {
  parent: any;
  init(h: any): void;
  view(h: any): void;
}

declare class tGameWeather {
  parent: any;
  weatherData: any;
  init(a: any): void;
  initLoad(a: any): void;
  updateWeather(a: any, d: any): any;
  setWeather(a: any, d: any, b: any): any;
  viewWeather(): void;
  viewTargetWeather(a: any): void;
}

declare class tGameWindowResource {
  parent: any;
  wcvs: any;
  wctx: any;
  windowData: any;
  init(e: any): void;
  loadWindow(e: any): void;
  createWindowFrame(e: any, l: any, h: any): any;
  createPixelWindowFrame(e: any, l: any, h: any): any;
}

declare class tGameWindows {
  parent: any;
  isEnabled: any;
  callObj: any;
  callBacks: any;
  init(d: any): void;
  getSaveList(d: any): void;
  getSaveData(d: any, e: any): void;
  setSaveData(d: any, e: any, b: any): void;
  deleteSaveData(d: any, e: any): void;
  changeContentSize(d: any, e: any, b: any, a: any): void;
  sendJsSysError(d: any, e: any): void;
  exportMyAdventurerCharactor(d: any, e: any, b: any, a: any, c: any): void;
  importMyAdventurerCharactor(d: any): void;
  overwriteMyAdventurerCharactorData(d: any, e: any, b: any, a: any, c: any, f: any): void;
  sendIsTr(): void;
  exportMpaData(d: any, e: any): void;
  importMapData(d: any): void;
  closeGame(): void;
}

declare class tGameYagi {
  parent: any;
  init(b: any): void;
  affect(b: any): any;
  tryRefresh(): any;
}

declare class tGameYukigassen {
  parent: any;
  init(a: any): void;
  tryMap(a: any): any;
  createMap(): any;
  affect(a: any, e: any, d: any): void;
  isHoshu(): any;
  hoshu(a: any): void;
  oneActionFinishAction(a: any, e: any, d: any): void;
  oneActionFinishAction_createyukigassen(a: any, e: any): any;
}
