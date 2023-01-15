from os import path
import pathlib
import asyncio
import pyautogui

from Constants import keyMapping, isValidCommand

from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By

scriptDirectory = pathlib.Path().absolute()

class Remote(webdriver.Chrome):
     
    def __init__(self, *args, **kwargs):
        # Set chromium flags
        options = Options()
        options.add_argument('-kiosk')
        options.add_argument(f"user-data-dir={path.join(scriptDirectory, 'userdata')}")
        options.add_experimental_option("useAutomationExtension", False)
        options.add_experimental_option("excludeSwitches",["enable-automation"])
        if 'options' in kwargs:
            del kwargs['options']
        super().__init__(*args, options=options, **kwargs)
        self.state = None
        self.links = dict()
        self.get("http://localhost:3000/")

    def press(self, command: str) -> bool:
        otherCommand = ["volumeup","volumedown"]
        if command == "back":
            pyautogui.press("browserback")
        if command in otherCommand:
            pyautogui.press(command)
        if isValidCommand(command):
            self.find_element(By.TAG_NAME, "body").send_keys(keyMapping(command))
            return True
        return False
