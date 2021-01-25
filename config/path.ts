import { IResult } from './data';

export enum ENetConf {
    //REST = 'https://z3.shneuro.cn:36021',//192.168.2.168
    REST = 'http://192.168.2.103:5000',
    REST2 = 'http://192.168.2.103:8080',
    FILE = 'http://127.0.0.1:6600',
    // REST = 'http://122.112.251.186:6601', 
    // FILE = 'http://122.112.251.186:6600',
    ASSET = 'http://127.0.0.1:8008',

}
export const PaymentMap = {
    'meiTuan' : '美团',
    'aliPay' : '支付宝',
    'wxPay' : '微信',
    'jianKangyun' : '健康云'
}
export const SourceMap = {
    inhospital: "医院预约",
    mt: "美团",
    neptel: "神经电生理电话",
    'swt-39jk': "商务通-39健康",
    'swt-360': "商务通-360",
    'swt-bd': "商务通-百度",
    'swt-gnnkyy': "商务通-gnnkyy",
    'swt-gw': "商务通-官网",
    'swt-qqyyw': "商务通-全球医院网",
    'swt-sg': "商务通-搜狗",
    'swt-sm': "商务通-神马",
    'tel-bd': "电话-百度",
    'tel-fz': "电话-复诊",
    'tel-js': "电话-介绍",
    'tel-qt': "电话-其它",
    'tel-wc': "电话-网查",
    'tel-wl': "电话-网络",
    'wx-fz': "微信-复诊",
}
export const DoctorId = 'kkb146dd1FQzdxbdhi4F';
export class Constants {
    static SourceMap = null;
    static PaymentMap = null;
    static DoctorId = null;
}
export function getBirthdayFromIdCard(idCard) {
    var birthday = "";
    if(idCard != null && idCard != ""){
        if(idCard.length == 15){
            birthday = "19"+idCard.substr(6,6);
        } else if(idCard.length == 18){
            birthday = idCard.substr(6,8);
        }
  
        birthday = birthday.replace(/(.{4})(.{2})/,"$1-$2-");
    }
    return birthday;
}
export const _url = (path: EDataPath) => {
    return ENetConf.REST + path;
};
export const _storageurl = (path: string) => { 
    return ENetConf.FILE + '/storage/' + path;
};

export enum EDataPath {
    RPC = '/z3rpc',
    AGENTHS = '/agent-hs'
}

export class UseCase {
}
