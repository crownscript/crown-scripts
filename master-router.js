(function () {
  "use strict";

  const MODE = window.CROWN_MASTER_SCRIPT_MODE === "inbound" ? "inbound" : "outbound";

  const CAMPS = [
    {
      name: "AMERICAN COALITION FOR POLICE AND SHERIFFS PAC",
      keys: [
        "acps",
        "american coalition for police and sheriffs",
        "coalition for police and sheriffs pac",
        "american coalition of police and sheriffs pac",
        "coalition of police and sheriffs pac"
      ],
      routes: {
        t4t: "police/acpst4t.html",
        xtap: "police/acpsxtap.html",
        t4tinbound: "police/acpst4tinbound.html",
        xtapinbound: "police/acpsxtapinbound.html"
      }
    },
    {
      name: "COMMITTEE FOR POLICE OFFICERS DEFENSE",
      keys: ["cpod", "committee for police officers defense"],
      routes: {
        t4t: "police/cpodt4t.html",
        xtap: "police/cpodxtap.html",
        t4tinbound: "police/cpodt4tinbound.html",
        xtapinbound: "police/cpodxtapinbound.html"
      }
    },
    {
      name: "DARE DRUG ABUSE RESISTANCE EDUCATION",
      keys: ["dare", "drug abuse resistance education"],
      routes: {
        t4t: "police/daret4t.html",
        xtap: "police/darextap.html",
        t4tinbound: "police/daret4tinbound.html",
        xtapinbound: "police/darextapinbound.html"
      }
    },
    {
      name: "FLORIDA POLICE AND TROOPERS ASSOCIATION",
      keys: ["flpta", "florida police and troopers association"],
      routes: {
        t4t: "police/flptat4t.html",
        xtap: "police/flptaxtap.html",
        t4tinbound: "police/flptat4tinbound.html",
        xtapinbound: "police/flptaxtapinbound.html"
      }
    },
    {
      name: "LAW ENFORCEMENT AGAINST DRUGS",
      keys: ["lead", "law enforcement against drugs"],
      routes: {
        t4t: "police/leadt4t.html",
        xtap: "police/leadxtap.html",
        t4tinbound: "police/leadt4tinbound.html",
        xtapinbound: "police/leadxtapinbound.html"
      }
    },
    {
      name: "MICHIGAN FRATERNAL ORDER OF POLICE FUND",
      keys: [
        "mifpac",
        "michigan fraternal order of police fund",
        "michigan fraternal order of police political fund"
      ],
      routes: {
        t4t: "police/mifpact4t.html",
        xtap: "police/mifpacxtap.html",
        t4tinbound: "police/mifpact4tinbound.html",
        xtapinbound: "police/mifpacxtapinbound.html"
      }
    },
    {
      name: "NATIONAL EMERGENCY RESPONDERS COALITION",
      keys: ["nerc", "national emergency responders coalition"],
      routes: {
        t4t: "police/nerct4t.html",
        xtap: "police/nercxtap.html",
        t4tinbound: "police/nerct4tinbound.html",
        xtapinbound: "police/nercxtapinbound.html"
      }
    },
    {
      name: "NATIONAL FALLEN OFFICER FOUNDATION",
      keys: ["nfof", "national fallen officer foundation", "national fallen officers foundation"],
      routes: {
        t4t: "police/nfoft4t.html",
        xtap: "police/nfofxtap.html",
        t4tinbound: "police/nfoft4tinbound.html",
        xtapinbound: "police/nfofxtapinbound.html"
      }
    },
    {
      name: "NEW JERSEY POLICE OFFICERS FOUNDATION",
      keys: ["njpof", "new jersey police officers foundation"],
      routes: {
        t4t: "police/njpoft4t.html",
        xtap: "police/njpofxtap.html",
        t4tinbound: "police/njpoft4tinbound.html",
        xtapinbound: "police/njpofxtapinbound.html"
      }
    },
    {
      name: "NATIONAL POLICE SUPPORT FUND",
      keys: ["npsf", "national police support fund"],
      routes: {
        t4t: "police/npsft4t.html",
        xtap: "police/npsfxtap.html",
        t4tinbound: "police/npsft4tinbound.html",
        xtapinbound: "police/npsfxtapinbound.html"
      }
    },
    {
      name: "POLICE ADVOCACY COMMITTEE PAC",
      keys: ["padvpav", "padv", "police advocacy committee"],
      routes: {
        t4t: "police/padvpavt4t.html",
        xtap: "police/padvpavxtap.html",
        t4tinbound: "police/padvpavt4tinbound.html",
        xtapinbound: "police/padvpavxtapinbound.html"
      }
    },
    {
      name: "THE POLICE ASSOCIATION OF VIRGINIA",
      keys: ["pava", "police association of virginia"],
      routes: {
        t4t: "police/pavat4t.html",
        xtap: "police/pavaxtap.html",
        t4tinbound: "police/pavat4tinbound.html",
        xtapinbound: "police/pavaxtapinbound.html"
      }
    },
    {
      name: "THE POLICE CONFERENCE OF NEW YORK",
      keys: ["pcny", "police conference of new york"],
      routes: {
        t4t: "police/pcnyt4t.html",
        xtap: "police/pcnyxtap.html",
        t4tinbound: "police/pcnyt4tinbound.html",
        xtapinbound: "police/pcnyxtapinbound.html"
      }
    },
    {
      name: "PENNSYLVANIA NARCOTICS OFFICERS ASSOCIATION",
      keys: ["pnoa", "pennsylvania narcotics officers association"],
      routes: {
        t4t: "police/pnoat4t.html",
        xtap: "police/pnoaxtap.html",
        t4tinbound: "police/pnoat4tinbound.html",
        xtapinbound: "police/pnoaxtapinbound.html"
      }
    },
    {
      name: "POLICE OFFICERS ACTION COMMITTEE PAC",
      keys: ["poacom", "police officers action committee"],
      routes: {
        t4t: "police/poacomt4t.html",
        xtap: "police/poacomxtap.html",
        t4tinbound: "police/poacomt4tinbound.html",
        xtapinbound: "police/poacomxtapinbound.html"
      }
    },
    {
      name: "POLICE OFFICERS ALLIANCE PAC",
      keys: ["poac", "police officers alliance"],
      routes: {
        t4t: "police/poact4t.html",
        xtap: "police/poacxtap.html",
        t4tinbound: "police/poact4tinbound.html",
        xtapinbound: "police/poacxtapinbound.html"
      }
    },
    {
      name: "POLICE OFFICERS SUPPORT ASSOCIATION PAC",
      keys: ["posa", "police officers support association"],
      routes: {
        t4t: "police/posat4t.html",
        xtap: "police/posaxtap.html",
        t4tinbound: "police/posat4tinbound.html",
        xtapinbound: "police/posaxtapinbound.html"
      }
    },
    {
      name: "POLICE OFFICERS SUPPORT COMMITTEE PAC",
      keys: ["posc", "police officers support committee"],
      routes: {
        t4t: "police/posct4t.html",
        xtap: "police/poscxtap.html",
        t4tinbound: "police/posct4tinbound.html",
        xtapinbound: "police/poscxtapinbound.html"
      }
    },
    {
      name: "POLICE AND SHERIFFS SUPPORT ALLIANCE PAC",
      keys: ["pssa", "police and sheriffs support alliance"],
      routes: {
        t4t: "police/pssat4t.html",
        xtap: "police/pssaxtap.html",
        t4tinbound: "police/pssat4tinbound.html",
        xtapinbound: "police/pssaxtapinbound.html"
      }
    },
    {
      name: "POLICE AND TROOPERS RELIEF FOUNDATION",
      keys: ["ptrf", "police and troopers relief foundation"],
      routes: {
        t4t: "police/ptrft4t.html",
        xtap: "police/ptrfxtap.html",
        t4tinbound: "police/ptrft4tinbound.html",
        xtapinbound: "police/ptrfxtapinbound.html"
      }
    },
    {
      name: "TEXAS COALITION OF POLICE AND SHERIFFS",
      keys: ["txcops", "txcop", "texas coalition of police and sheriffs"],
      routes: {
        t4t: "police/txcopst4t.html",
        xtap: "police/txcopxtap.html",
        t4tinbound: "police/txcopst4tinbound.html",
        xtapinbound: "police/txcopsxtapinbound.html"
      }
    },
    {
      name: "TEXAS FALLEN OFFICER FOUNDATION",
      keys: ["txfof", "texas fallen officer foundation", "texas fallen officers foundation"],
      routes: {
        t4t: "police/txfoft4t.html",
        xtap: "police/txfofxtap.html",
        t4tinbound: "police/txfoft4tinbound.html",
        xtapinbound: "police/txfofxtapinbound.html"
      }
    },
    {
      name: "AMERICAN FIREFIGHTERS COALITION PAC",
      keys: ["afc", "american firefighters coalition", "american firefighters coaltion pac"],
      routes: {
        t4t: "firefighters/afct4t.html",
        xtap: "firefighters/afcxtap.html",
        t4tinbound: "firefighters/afct4tinbound.html",
        xtapinbound: "firefighters/afcxtapinbound.html"
      }
    },
    {
      name: "COALITION FOR PARAMEDICS AND FIREFIGHTERS PAC",
      keys: ["cfpff", "coalition for paramedics and firefighters"],
      routes: {
        t4t: "firefighters/cfpfft4t.html",
        xtap: "firefighters/cfpffxtap.html",
        t4tinbound: "firefighters/cfpfft4tinbound.html",
        xtapinbound: "firefighters/cfpffxtapinbound.html"
      }
    },
    {
      name: "COMMITTEE FOR PARAMEDICS AND FIREFIGHTERS PAC",
      keys: ["cpft", "committee for paramedics and firefighters"],
      routes: {
        t4t: "firefighters/cpftt4t.html",
        xtap: "firefighters/cpftxtap.html",
        t4tinbound: "firefighters/cpftt4tinbound.html",
        xtapinbound: "firefighters/cpftxtapinbound.html"
      }
    },
    {
      name: "FIREFIGHTERS CHARITABLE FOUNDATION",
      keys: ["fcf", "firefighters charitable foundation"],
      routes: {
        t4t: "firefighters/fcft4t.html",
        xtap: "firefighters/fcfxtap.html",
        t4tinbound: "firefighters/fcft4tinbound.html",
        xtapinbound: "firefighters/fcfxtapinbound.html"
      }
    },
    {
      name: "FIREFIGHTERS SUPPORT ALLIANCE",
      keys: ["ffsa", "firefighters support alliance"],
      routes: {
        t4t: "firefighters/ffsat4t.html",
        xtap: "firefighters/ffsaxtap.html",
        t4tinbound: "firefighters/ffsat4tinbound.html",
        xtapinbound: "firefighters/ffsaxtapinbound.html"
      }
    },
    {
      name: "NATIONAL COMMITTEE FOR VOLUNTEER FIREFIGHTERS PAC",
      keys: ["ncvf", "national committee for volunteer firefighters"],
      routes: {
        t4t: "firefighters/ncvft4t.html",
        xtap: "firefighters/ncvfxtap.html",
        t4tinbound: "firefighters/ncvft4tinbound.html",
        xtapinbound: "firefighters/ncvfxtapinbound.html"
      }
    },
    {
      name: "VOLUNTEER FIREFIGHTERS ALLIANCE",
      keys: ["vfa", "volunteer firefighters alliance"],
      routes: {
        t4t: "firefighters/vfat4t.html",
        xtap: "firefighters/vfaxtap.html",
        t4tinbound: "firefighters/vfat4tinbound.html",
        xtapinbound: "firefighters/vfaxtapinbound.html"
      }
    },
    {
      name: "VOLUNTEER FIREFIGHTERS SUPPORT COMMITTEE PAC",
      keys: ["voffsc", "volunteer firefighters support committee"],
      routes: {
        t4t: "firefighters/voffsct4t.html",
        xtap: "firefighters/voffscxtap.html",
        t4tinbound: "firefighters/voffsct4tinbound.html",
        xtapinbound: "firefighters/voffscxtapinbound.html"
      }
    },
    {
      name: "AMERICAN VETERANS SUPPORT COMMITTEE PAC",
      keys: ["avsc", "american veterans support committee"],
      routes: {
        t4t: "veterans/avsct4t.html",
        xtap: "veterans/avscxtap.html",
        t4tinbound: "veterans/avsct4tinbound.html",
        xtapinbound: "veterans/avscxtapinbound.html"
      }
    },
    {
      name: "COALITION FOR HOMELESS AND DISABLED VETERANS PAC",
      keys: ["chdvpac", "chdv", "coalition for homeless and disabled veterans"],
      routes: {
        t4t: "veterans/chdvpact4t.html",
        xtap: "veterans/chdvpacxtap.html",
        t4tinbound: "veterans/chdvpact4tinbound.html",
        xtapinbound: "veterans/chdvpacxtapinbound.html"
      }
    },
    {
      name: "HANDICAPPED VETERANS SERVICE INITIATIVE PAC",
      keys: ["hscdipac", "hscdi", "hscid", "handicapped veterans service initiative"],
      routes: {
        t4t: "veterans/hscdipact4t.html",
        xtap: "veterans/hscdipacxtap.html",
        t4tinbound: "veterans/hscdipact4tinbound.html",
        xtapinbound: "veterans/hscdipacxtapinbound.html"
      }
    },
    {
      name: "NATIONAL COALITION FOR DISABLED VETERANS PAC",
      keys: ["ncdv", "national coalition for disabled veterans"],
      routes: {
        t4t: "veterans/ncdvt4t.html",
        xtap: "veterans/ncdvxtap.html",
        t4tinbound: "veterans/ncdvt4tinbound.html",
        xtapinbound: "veterans/ncdvxtapinbound.html"
      }
    },
    {
      name: "AMERICAN VETERANS DEPARTMENT OF NEW YORK",
      keys: ["nyamvets", "ny amvets", "new york amvets", "american veterans department of new york"],
      routes: {
        t4t: "veterans/nyamvetst4t.html",
        xtap: "veterans/nyamvetsxtap.html",
        t4tinbound: "veterans/nyamvetst4tinbound.html",
        xtapinbound: "veterans/nyamvetsxtapinbound.html"
      }
    },
    {
      name: "THE UNITED VETERANS OF AMERICA PAC",
      keys: ["unvet", "united veterans of america"],
      routes: {
        t4t: "veterans/unvett4t.html",
        xtap: "veterans/unvetxtap.html",
        t4tinbound: "veterans/unvett4tinbound.html",
        xtapinbound: "veterans/unvetxtapinbound.html"
      }
    },
    {
      name: "VETERANS ASSOCIATION OF AMERICA",
      keys: ["vaa", "veterans association of america"],
      routes: {
        t4t: "veterans/vaat4t.html",
        xtap: "veterans/vaaxtap.html",
        t4tinbound: "veterans/vaat4tinbound.html",
        xtapinbound: "veterans/vaaxtapinbound.html"
      }
    },
    {
      name: "VETERANS ASSISTANCE ACTION FUND PAC",
      keys: ["vaf", "veterans assistance action fund"],
      routes: {
        t4t: "veterans/vaft4t.html",
        xtap: "veterans/vafxtap.html",
        t4tinbound: "veterans/vaft4tinbound.html",
        xtapinbound: "veterans/vafxtapinbound.html"
      }
    }
  ];

  function normalize(value) {
    return String(value || "")
      .toUpperCase()
      .replace(/&/g, "AND")
      .replace(/[^A-Z0-9]+/g, "");
  }

  function cleanVicidialValue(value) {
    const cleaned = String(value || "").trim();
    if (!cleaned || /^--A--.*--B--$/i.test(cleaned)) {
      return "";
    }
    return cleaned;
  }

  function getCustomerName(params) {
    const fullName = cleanVicidialValue(params.get("name")) || cleanVicidialValue(params.get("full_name"));
    if (fullName) {
      return fullName;
    }

    const firstName = cleanVicidialValue(params.get("first_name"));
    const lastName = cleanVicidialValue(params.get("last_name"));
    return [firstName, lastName].filter(Boolean).join(" ");
  }

  function getParams() {
    const params = new URLSearchParams(window.location.search);
    return {
      params,
      customerName: getCustomerName(params),
      listDescription: params.get("list_description") || "",
      sourceId: params.get("source_id") || ""
    };
  }

  function routeText(params, listDescription) {
    return [
      listDescription,
      params.get("list_name"),
      params.get("list_id"),
      params.get("campaign"),
      window.location.search
    ].filter(Boolean).join(" ");
  }

  function pickScriptType(sourceId, campText) {
    const sourceKey = normalize(sourceId).charAt(0);
    if (sourceKey === "T") {
      return "t4t";
    }
    if (sourceKey === "S" || sourceKey === "C") {
      return "xtap";
    }

    const normalizedCampText = normalize(campText);
    if (normalizedCampText.indexOf("T4T") !== -1) {
      return "t4t";
    }
    if (normalizedCampText.indexOf("XTAP") !== -1) {
      return "xtap";
    }
    return "";
  }

  function scoreCamp(camp, normalizedCampText) {
    return camp.keys.reduce(function (bestScore, key) {
      const normalizedKey = normalize(key);
      if (!normalizedKey) {
        return bestScore;
      }
      if (normalizedCampText === normalizedKey) {
        return Math.max(bestScore, normalizedKey.length + 1000);
      }
      if (normalizedCampText.indexOf(normalizedKey) !== -1) {
        return Math.max(bestScore, normalizedKey.length);
      }
      return bestScore;
    }, 0);
  }

  function pickCamp(campText) {
    const normalizedCampText = normalize(campText);
    const result = CAMPS
      .map(function (camp) {
        return {
          camp,
          score: scoreCamp(camp, normalizedCampText)
        };
      })
      .filter(function (result) {
        return result.score > 0;
      })
      .sort(function (left, right) {
        return right.score - left.score;
      })[0];
    return result ? result.camp : null;
  }

  function showError(message, details) {
    const status = document.getElementById("router-status");
    if (status) {
      status.textContent = message;
    }

    const heading = document.querySelector("h1") || document.createElement("h1");
    heading.textContent = "Master Script Routing Error";
    if (!heading.parentNode) {
      document.body.appendChild(heading);
    }

    const detailBox = document.createElement("pre");
    detailBox.textContent = details.join("\n");
    document.body.appendChild(detailBox);
  }

  function redirectToScript(route) {
    const targetUrl = new URL(route, window.location.href);
    targetUrl.search = window.location.search;
    window.location.replace(targetUrl.toString());
  }

  function run() {
    const info = getParams();
    const campText = routeText(info.params, info.listDescription);
    const scriptType = pickScriptType(info.sourceId, campText);
    const camp = pickCamp(campText);
    const variant = MODE === "inbound" ? scriptType + "inbound" : scriptType;
    const route = camp && camp.routes ? camp.routes[variant] : "";

    if (!camp || !scriptType || !route) {
      showError("Could not detect the correct script.", [
        "Mode: " + MODE,
        "Customer Name: " + (info.customerName || "NONE"),
        "List Description: " + (info.listDescription || "[missing]"),
        "Source ID: " + (info.sourceId || "[missing]"),
        "Detected Camp: " + (camp ? camp.name : "[none]"),
        "Detected Script Type: " + (scriptType || "[none]"),
        "Expected Source IDs: T = T4T, S or C = XTAP"
      ]);
      return;
    }

    const status = document.getElementById("router-status");
    if (status) {
      status.textContent = "Loading " + camp.name + " " + variant.toUpperCase() + ".";
    }
    redirectToScript(route);
  }

  run();
}());
