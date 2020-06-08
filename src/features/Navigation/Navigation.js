import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FieldInput from "../../common/FieldInput";

const MatchContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 8px;
  overflow: hidden;
  background: white;
`;

const NavigationContaienr = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const Group = styled.div`
  width: 100%;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  background: white;
  margin-right: auto;
`;

const Matching = styled.div`
  margin-top: 16px;
  display: flex;
  width: 100%;
  border-radius: 8px;
  background: white;
  align-items: center;
  justify-content: flex-start;
  padding: 8px;
  span {
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    color: black;
    padding-left: 8px;
    padding-right: 8px;
    text-overflow: ellipsis;
  }
`;

const defaultUser = {
  menudata: {
    dashboard: {
      id: "dashboard",
      label: "Dashboard",
      url: "/app-admin/dashboard"
    },
    workflow: {
      id: "workflow",
      label: "Workflows",
      url: "/#/workflow"
    },
    reports: {
      id: "reports",
      label: "Reports",
      url: "/#/reports",
      menu: [
        {
          id: "workflows",
          label: "Workflow",
          url: "/#/reports"
        },
        {
          id: "wfstarted",
          label: "Launched",
          url: "/#/reports/wfstarted"
        },
        {
          id: "engagement",
          label: "Engagement",
          url: "/#/reports/engagement"
        },
        {
          id: "engagementhm",
          label: "Heatmap",
          url: "/#/reports/engagementhm"
        },
        {
          id: "forms",
          label: "Forms",
          url: "/#/reports/forms"
        },
        {
          id: "people",
          label: "Profiles",
          url: "/#/reports/people"
        }
      ]
    },
    csrsettings: {
      id: "csrsettings",
      label: "Customers",
      url: "/#/csr/complist",
      menu: [
        {
          id: "accounts",
          label: "Accounts",
          url: "/#/csr/complist"
        },
        {
          id: "userlist",
          label: "Admins",
          url: "/#/csr/userlist"
        },
        {
          id: "archiveduserlist",
          label: "Admins (Archived)",
          url: "/#/csr/archiveduserlist"
        },
        {
          id: "languagelist",
          label: "Languages",
          url: "/#/csr/languagelist"
        },
        {
          id: "sendmsg",
          label: "Message",
          url: "/#/csr/sendmsg"
        },
        {
          id: "transferworkflow",
          label: "Transfer Workflow",
          url: "/#/csr/transferworkflow"
        }
      ]
    },
    settings: {
      id: "settings",
      label: "Settings",
      url: "/#/settings",
      menu: [
        {
          id: "admins",
          label: "Admins",
          url: "/#/settings/user"
        },
        {
          id: "security",
          label: "Security",
          url: "/#/settings/security"
        },
        {
          id: "configurations",
          label: "Configuration",
          url: "/#/settings"
        },
        {
          id: "branding",
          label: "Branding",
          url: "/#/settings/branding"
        },
        {
          id: "locations",
          label: "Location",
          url: "/#/settings/loc"
        },
        {
          id: "categories",
          label: "Categories",
          url: "/#/settings/optcat"
        },
        {
          id: "integrations",
          label: "Integrations",
          url: "/#/settings/integration"
        },
        {
          id: "bulkupload",
          label: "CSV Upload",
          url: "/#/settings/bulkupload"
        },
        {
          id: "managerlist",
          label: "Stakeholders",
          url: "/#/settings/managers"
        },
        {
          id: "prflfields",
          label: "Profile Fields",
          url: "/#/settings/profilefields"
        },
        {
          id: "customfields",
          label: "Custom Fields",
          url: "#/settings/customfields"
        }
      ]
    }
  }
};

const Navigation = () => {
  const [value, setValue] = useState("/#/csr/archiveduserlist");
  const [matchValue, setMatchValue] = useState(false);
  const [currentPath, setCurrentPath] = useState("");
  const user = null;
  const { menudata } = user || defaultUser;
  const onChange = e => {
    setValue(e.target.value);
  };

  const splitPath = path => path.split("/")[2];

  // const matchPath = (keyword, currentPath) =>
  //     new RegExp(keyword).test(splitPath(currentPath));

  useEffect(() => {
    setMatchValue(true);
    setCurrentPath(value);
    if (value && value.length >= 0) {
      const items = menudata[splitPath(value)];
      console.log("items >>>", items);
    }
    console.log("menudata", menudata);
  }, [value]);

  return (
    <NavigationContaienr>
      <MatchContainer>
        <FieldInput placeholder="URL..." onChange={onChange} value={value} />
      </MatchContainer>
      {matchValue && (
        <Matching>
          <span>Matching:</span>"{splitPath(value)}"
        </Matching>
      )}
    </NavigationContaienr>
  );
};

export default Navigation;
