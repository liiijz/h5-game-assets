var yaxvn = ['zM9YrwfJAa==', 'Aw1WB3j0', 'concat', 'START_SCENE', 'createApplication', 'resolve', 'loadScene', 'scriptPackages', 'qNvPBhrPBKj1BMrSzu5HBwu=', 'AssetManager', 'bit', 'Bg9HzePZtgLZDezPBgu=', 'undefined', 'B3bLBG==', 'GameCanvas', 'rgvIDwDnB2rL', 'ERROR', 'orientation', 'director', 'RESOURCES', '_CCSettings', 'loadBundle', 'DgHLBG==', 'import', 'customJointTextureLayouts', 'CMvZB2X2zq==', 'ANnmAxn0', 'startGameAsync', 'BwfJCM9Z', 'tgf5zxjZ', 'map', 'src/settings.7ce1d.json', 'GET', 'C2v0uhjVz3jLC3m=', 'CNvU', 'BMfTzq==', 'collisionMatrix', 'C2vUza==', 'then', 'physics', 'Bgf1BMnOu2nLBMu=', 'zw5K', 'x0ndu2v0DgLUz3m=', 'Aw5PDa==', 'INFO'];
(function(gxoq, nfe) {
    var jnouu = function(zdlxt) {
        while (--zdlxt) {
            gxoq['push'](gxoq['shift']());
        }
    };
    jnouu(++nfe);
}(yaxvn, 0x125));
var gxoq = function(nfe, jnouu) {
    nfe = nfe - 0x0;
    var zdlxt = yaxvn[nfe];
    if (gxoq['CIKNTR'] === undefined) {
        var elgoe = function(lgl) {
            var tavmxg = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/='
              , vivny = String(lgl)['replace'](/=+$/, '');
            var fihz = '';
            for (var jetil = 0x0, pozl, gcwv, vbwhqvsaapyg = 0x0; gcwv = vivny['charAt'](vbwhqvsaapyg++); ~gcwv && (pozl = jetil % 0x4 ? pozl * 0x40 + gcwv : gcwv,
            jetil++ % 0x4) ? fihz += String['fromCharCode'](0xff & pozl >> (-0x2 * jetil & 0x6)) : 0x0) {
                gcwv = tavmxg['indexOf'](gcwv);
            }
            return fihz;
        };
        gxoq['MsxsLz'] = function(hmu) {
            var ig = elgoe(hmu);
            var zgj = [];
            for (var gdqj = 0x0, tkjcv = ig['length']; gdqj < tkjcv; gdqj++) {
                zgj += '%' + ('00' + ig['charCodeAt'](gdqj)['toString'](0x10))['slice'](-0x2);
            }
            return decodeURIComponent(zgj);
        }
        ,
        gxoq['CkBopb'] = {},
        gxoq['CIKNTR'] = !![];
    }
    var nxs = gxoq['CkBopb'][nfe];
    return nxs === undefined ? (zdlxt = gxoq['MsxsLz'](zdlxt),
    gxoq['CkBopb'][nfe] = zdlxt) : zdlxt = nxs,
    zdlxt;
};
var nfe = function(gxoq, jnouu) {
    gxoq = gxoq - 0x0;
    var zdlxt = yaxvn[gxoq];
    return zdlxt;
};
System['register']([], function(jnouu, zdlxt) {
    var wsjm = nfe;
    'use strict';
    var elgoe;
    return jnouu(wsjm('0x1a'), function(nxs) {
        var vszw = wsjm
          , aizyomdummpa = gxoq
          , lgl = nxs[aizyomdummpa('0x21')];
        return nxs['fetchWasm'],
        Promise.resolve().then(function() {
            return __FIRST_VIEW__['setProgress'](0.1, 0.2);
        })[vszw('0xf')]( () => vivny('cc'))[vszw('0xf')](function() {
            return Promise['resolve']()['then'](function() {
                return vivny('cc');
            })['then'](function(fihz) {
                elgoe = fihz;
            });
        })['then'](function() {
            return __FIRST_VIEW__['setProgress'](0.2, 0.4);
        })['then'](function() {
            var emnacvxadsqt = vszw;
            return gcwv = vivny,
            (pozl = emnacvxadsqt('0x0'))in (jetil = {
                'start': tavmxg
            }) ? Object['defineProperty'](jetil, pozl, {
                'value': gcwv,
                'enumerable': !0x0,
                'configurable': !0x0,
                'writable': !0x0
            }) : jetil[pozl] = gcwv,
            jetil;
            var jetil, pozl, gcwv;
        });
        function tavmxg(vbwhqvsaapyg) {
            var cwk = aizyomdummpa, kovicohdi = vszw, hmu, ig = vbwhqvsaapyg['findCanvas'];
            return Promise[kovicohdi('0x1b')]()[cwk('0x2c')](function() {
                var qvjfr = cwk;
                return __FIRST_VIEW__[qvjfr('0xa')](0.4, 0.6);
            })['then'](function() {
                return function() {
                    var iacqu = nfe
                      , zgj = iacqu('0x8');
                    return new Promise(function(gdqj, tkjcv) {
                        var hmm = gxoq
                          , hzn = iacqu;
                        if (hzn('0x22') == typeof fsUtils || zgj['startsWith']('http')) {
                            var bpthtbzo = function kh() {
                                var ofyk = hzn
                                  , vkcrizdetmmoc = gxoq
                                  , zky = new XMLHttpRequest();
                                zky[vkcrizdetmmoc('0x23')](ofyk('0x9'), zgj),
                                zky['responseType'] = 'text',
                                zky['onload'] = function() {
                                    var pss = ofyk;
                                    window[pss('0x2a')] = JSON['parse'](zky['response']),
                                    gdqj();
                                }
                                ,
                                zky['onerror'] = function() {
                                    sruqz-- > 0x0 ? setTimeout(kh, iqcn) : tkjcv(new Error('request\x20settings\x20failed!'));
                                }
                                ,
                                zky[vkcrizdetmmoc('0xe')](null);
                            }
                              , sruqz = 0x3
                              , iqcn = 0x7d0;
                            bpthtbzo();
                        } else {
                            var shi = fsUtils['readJsonSync'](zgj);
                            shi instanceof Error ? tkjcv(shi) : (window[hmm('0x13')] = shi,
                            gdqj());
                        }
                    }
                    );
                }();
            })['then'](function() {
                var omdk = cwk;
                return __FIRST_VIEW__[omdk('0xa')](0.6, 0.8);
            })['then'](function() {
                var xlitxpf = cwk;
                return hmu = window[xlitxpf('0x13')],
                __FIRST_VIEW__[xlitxpf('0x12')]()['then'](function() {
                    return function(pfa, iyrowlkg) {
                        var sjbhobbiep = gxoq;
                        if (pfa[sjbhobbiep('0x5')])
                            for (var cyrhxwc in pfa['macros'])
                                cc['macro'][cyrhxwc] = pfa[sjbhobbiep('0x5')][cyrhxwc];
                        var torjk = function(mmrvl, ggbiaewp) {
                            var fkhf = nfe
                              , xde = sjbhobbiep
                              , ixxkyvqhfsv = {
                                'bundleVers': mmrvl['bundleVers'],
                                'remoteBundles': mmrvl['remoteBundles'],
                                'server': mmrvl['server'],
                                'subpackages': mmrvl['subpackages']
                            }
                              , sjyazbojane = {
                                'debugMode': mmrvl['debug'] ? elgoe[xde('0x25')][fkhf('0x15')] : elgoe[xde('0x25')][fkhf('0x26')],
                                'showFPS': !0x1,
                                'frameRate': 0x3c,
                                'groupList': mmrvl['groupList'],
                                'collisionMatrix': mmrvl[fkhf('0xd')],
                                'renderPipeline': mmrvl['renderPipeline'],
                                'adapter': ggbiaewp(fkhf('0x24')),
                                'assetOptions': ixxkyvqhfsv,
                                'customJointTextureLayouts': mmrvl[fkhf('0x1')] || [],
                                'physics': mmrvl[fkhf('0x10')],
                                'orientation': mmrvl[fkhf('0x27')],
                                'exactFitScreen': mmrvl['exactFitScreen']
                            };
                            return sjyazbojane;
                        }(pfa, iyrowlkg)
                          , usnce = cc['game'][sjbhobbiep('0x14')](torjk);
                        try {
                            pfa['customLayers'] && pfa['customLayers'][sjbhobbiep('0x16')](function(savdz) {
                                var nuul = nfe
                                  , mwgto = sjbhobbiep;
                                cc[mwgto('0x6')]['addLayer'](savdz[mwgto('0xc')], savdz[nuul('0x20')]);
                            });
                        } catch (vxlne) {
                            console['warn'](vxlne);
                        }
                        return usnce ? Promise[sjbhobbiep('0x2')](usnce) : Promise['reject']();
                    }(hmu, ig);
                })['then'](function() {
                    var qnya = nfe;
                    if (hmu[qnya('0x1d')])
                        return zamzsqpgth = hmu['scriptPackages'],
                        Promise['all'](zamzsqpgth[qnya('0x7')](function(tzc) {
                            return vivny(tzc);
                        }));
                    var zamzsqpgth;
                })[xlitxpf('0x2c')](function() {
                    return __enginhook__(),
                    new Promise(function(vrxdmwkz, gop) {
                        require('./subpackages/NIN3AC/game.js', vrxdmwkz);
                    }
                    );
                })['then'](function() {
                    var jbs = xlitxpf;
                    return function(wtf) {
                        var regqzuojsozrz = nfe
                          , htmb = Promise[regqzuojsozrz('0x1b')]();
                        return wtf['forEach'](function(mbmeu) {
                            var yxune = gxoq;
                            htmb = htmb[yxune('0x2c')](function() {
                                var pticn = nfe;
                                return lgl('src/'[pticn('0x18')](mbmeu));
                            });
                        }),
                        htmb;
                    }(hmu[jbs('0x3')]);
                })[xlitxpf('0x2c')](function() {
                    return function(hmjlhaxethngq, dqtb) {
                        var btcqslsxc = gxoq
                          , bqdwuyirr = nfe;
                        Promise[bqdwuyirr('0x1b')]();
                        var andup = cc[bqdwuyirr('0x1f')][btcqslsxc('0x1e')]
                          , waa = andup['MAIN']
                          , olfl = andup[bqdwuyirr('0x29')]
                          , hwziv = andup[bqdwuyirr('0x19')]
                          , kbgu = hmjlhaxethngq ? [olfl, waa] : [waa];
                        return dqtb && kbgu['push'](hwziv),
                        kbgu['reduce'](function(uriar, yjp) {
                            return uriar['then'](function() {
                                return function(lznk) {
                                    return new Promise(function(dqp, chjr) {
                                        var hnrkrtxzrpdza = nfe;
                                        cc['assetManager'][hnrkrtxzrpdza('0x2b')](lznk, function(dgurdwlxbliic, snc) {
                                            if (dgurdwlxbliic)
                                                return chjr(dgurdwlxbliic);
                                            dqp(snc);
                                        });
                                    }
                                    );
                                }(yjp);
                            });
                        }, Promise[bqdwuyirr('0x1b')]());
                    }(hmu['hasResourcesBundle'], hmu['hasStartSceneBundle']);
                })['then'](function() {
                    var pnfhy = xlitxpf;
                    return cc['game'][pnfhy('0xb')](function() {
                        return function(xgfvx) {
                            var yivac = gxoq
                              , htimr = nfe;
                            window[htimr('0x2a')] = void 0x0,
                            cc['view']['resizeWithBrowserSize'](!0x0);
                            var ygr = xgfvx[yivac('0x11')];
                            cc[htimr('0x28')][htimr('0x1c')](ygr, null, function() {
                                var jhrn = htimr;
                          
                                cc['view']['setDesignResolutionSize'](0x2d0, 0x500, 0x4),
                                console['log']('Success\x20to\x20load\x20scene:\x20'[jhrn('0x18')](ygr));
                            });
                        }(hmu);
                    });
                });
            });
        }
        function vivny(zziqrwotxqlwl) {
            var xjirs = aizyomdummpa;
            return zdlxt[xjirs('0x17')](''['concat'](zziqrwotxqlwl));
        }
    }),
    {
        'setters': [],
        'execute': function() {}
    };
});
