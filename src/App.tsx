import './App.css';
import {
    AdminContext,
    Form,
    FormGroupContextProvider,
    RecordContextProvider,
    SelectInput,
    TextInput,
    useFormGroup
} from "react-admin";
import React, {FC, PropsWithChildren} from "react";

export const groupState = 'group1Name';
export const groupName = 'group2Name';

function GroupState() {
    const {isDirty} = useFormGroup(groupName);
    const propertiesInGroupNameChanged = Boolean(isDirty);

    return (
        <FormGroupContextProvider name={groupState}>
            <div><TextInput
                source="state"
                label="State"
                disabled={propertiesInGroupNameChanged}/>
            </div>
        </FormGroupContextProvider>
    );
}

export const GroupName: FC<PropsWithChildren<{}>> = ({children}) => {
    const {isDirty} = useFormGroup(groupState);
    const propertiesInGroupStateChanged = Boolean(isDirty);

    return (
        <FormGroupContextProvider name={groupName}>
            <div>
                <TextInput
                    source="name"
                    label="Name"
                    disabled={propertiesInGroupStateChanged}/>
            </div>
        </FormGroupContextProvider>
    );
}


function App() {

    const record = {
        "name": 'Content',
        "state": "Draft",
    }

    return (
        <div className="App">
            <RecordContextProvider value={record}>
                <AdminContext>
                    <Form>
                        <GroupState/>
                        <GroupName/>
                    </Form>
                </AdminContext>
            </RecordContextProvider>
        </div>
    );
}

export default App;

