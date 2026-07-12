import { useState, createContext, useContext } from "react";

const codexoContext = createContext(null);

export const CodexoProvider = ({ children }) => {
  const [openRegistrationDialog, setOpenRegistrationDialog] = useState(false);
  const [openCounsellingDialog, setOpenCounsellingDialog] = useState(false);
  const [openCodexoSuccessDialog, setOpenCodexoSuccessDialog] = useState(false);
  const [codexoSuccessDialogContent, setCodexoSuccessDialogContent] = useState({
    title: "",
    message: "",
  });
  const [selectedCourse, setSelectedCourse] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  return (
    <codexoContext.Provider
      value={{
        openRegistrationDialog,
        setOpenRegistrationDialog,
        openCounsellingDialog,
        setOpenCounsellingDialog,
        openCodexoSuccessDialog,
        setOpenCodexoSuccessDialog,
        codexoSuccessDialogContent,
        setCodexoSuccessDialogContent,
        selectedCourse,
        setSelectedCourse,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </codexoContext.Provider>
  );
};

export const useCodexoContext = () => useContext(codexoContext);
