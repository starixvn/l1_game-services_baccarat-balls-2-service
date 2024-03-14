import { spawn } from "child_process";

export const startSetupDataProcess = (processId: any, overrideGameConfigs: {}, onSetupDataDone: { (): void; (): any }) => {
    const setupDataProcess = spawn("cmd.exe", [
        "/s",
        "/c",
        "tsx",
        "./tests/integration-tests/_stubs/test-data-setup.ts",
        "-pid",
        `${processId}`,
        `${JSON.stringify(overrideGameConfigs)}`,
    ]);

    setupDataProcess.stdout.on("data", (data) => {
        console.log(`stdout: ${data}`);
    });

    setupDataProcess.stderr.on("data", (data) => {
        console.log(`stderr: ${data}`);
    });

    setupDataProcess.on("close", (code) => {
        onSetupDataDone && onSetupDataDone();
        console.log(`child process exited with code ${code}`);
    });

    return setupDataProcess;
};

export const startServiceProcess = (processId: any, overrideAppConfigs: {}, onServiceStarted: { (): void; (): any }) => {
    const serviceProcess = spawn("cmd.exe", [
        "/s",
        "/c",
        "tsx",
        "./tests/integration-tests/_stubs/game-service-app.ts",
        "-pid",
        `${processId}`,
        `${JSON.stringify(overrideAppConfigs)}`,
    ]);

    serviceProcess.stdout.on("data", (data: string | string[]) => {
        console.log(`stdout: ${data}`);

        if (data && data.includes("Express server started and running on")) {
            onServiceStarted && onServiceStarted();
        }
    });

    serviceProcess.stderr.on("data", (data: any) => {
        console.log(`stderr: ${data}`);
    });

    return serviceProcess;
};

export const startService = (processId: any, overrideGameConfigs = {}, overrideAppConfigs = {}) => {
    let processStartService: any;
    const JEST_ASSERT_WAITING_RESPONSE_TIMEOUT = 50000;
    beforeAll((done) => {
        startSetupDataProcess(processId, overrideGameConfigs, () => {
            console.log("done setup db");
            processStartService = startServiceProcess(processId, overrideAppConfigs, () => {
                console.log("start tests");
                done();
            });
        });
    }, JEST_ASSERT_WAITING_RESPONSE_TIMEOUT);

    afterAll(() => {
        processStartService.stdin.pause();
        processStartService.kill();
    });
};
