package pb.bas.apteczkaSpring;
import org.junit.Before;
import org.junit.Test;
import org.junit.experimental.theories.Theories;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.nio.charset.Charset;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

public class ApteczkaSpringSelenium {

    WebDriver webDriver;

    @Before
    public void Init(){
        System.setProperty("webdriver.chrome.driver","src\\test\\java\\pb\\bas\\apteczkaSpring\\chromedriver.exe");//narazie na sztywno ścieżka do webdrivera... wiem wiem nie powinienem ale wolę tak niż PATH przestawiać w systemie
        webDriver = new ChromeDriver();
        webDriver.manage().timeouts().implicitlyWait(10000,TimeUnit.MILLISECONDS);
        webDriver.manage().window().maximize();
        webDriver.get("localhost:8080");

    }

    ///Test Case #1
    @Test
    public void medicineSearchTest() throws InterruptedException {

        WebElement searchButton = webDriver.findElement(By.cssSelector("[ng-reflect-router-link=\"/medicines/search\"]"));
        searchButton.click();
        WebElement searchInput = webDriver.findElement(By.cssSelector("[placeholder=\"Search\"]"));
        searchInput.sendKeys("Cialis");
        Thread.sleep(3000); //for medicine list to load
        List<WebElement> medicines = webDriver.findElements(By.cssSelector("[src=\"/assets/medicine-128.png\"]"));
        medicines.get(0).click();
        List<WebElement> pharmacies = webDriver.findElements(By.xpath("//a[contains(@href,'/pharmacy/item')]"));
        pharmacies.get(0).click();
        webDriver.quit();
    }

    //Test Case #2
    @Test
    public void addMedicineTest() throws InterruptedException{
        WebElement loginButton = webDriver.findElement(By.cssSelector("[ng-reflect-router-link=\"/login\"]"));
        loginButton.click();
        WebElement loginInput = webDriver.findElement(By.cssSelector("[name=\"login\"]"));
        WebElement passwordInput = webDriver.findElement(By.cssSelector("[name=\"password\"]"));
        WebElement submitButton = webDriver.findElement(By.cssSelector("[type=\"submit\"]"));

        //wrong login data
        loginInput.sendKeys("d");
        passwordInput.sendKeys("xd");
        submitButton.click();
        webDriver.switchTo().alert().accept();
        loginInput.clear();
        passwordInput.clear();

        Thread.sleep(2000);
        loginInput.sendKeys("admin");
        passwordInput.sendKeys("admin");
        submitButton.click();

        submitButton = webDriver.findElement(By.cssSelector("[type=\"submit\"]"));
        submitButton.click();
        webDriver.switchTo().alert().accept();
        Thread.sleep(2000);

        WebElement medicineName = webDriver.findElement(By.cssSelector("[name=\"name\"]"));
        WebElement medicineCompany = webDriver.findElement(By.cssSelector("[name=\"company\"]"));
        WebElement medicineDesc = webDriver.findElement(By.cssSelector("[name=\"description\"]"));
        WebElement medicineComp = webDriver.findElement(By.cssSelector("[name=\"composition\"]"));

        String medicineNameValue = randomName();
        medicineName.sendKeys(medicineNameValue);
        medicineCompany.sendKeys("test");
        medicineDesc.sendKeys("test");
        medicineComp.sendKeys("test");
        submitButton.click();
        Thread.sleep(1000);

        WebElement addedMedicine = webDriver.findElement(By.xpath("//h4[contains(text(),'"+medicineNameValue+"')]"));


    }

    public String randomName() {
        int leftLimit = 97; // letter 'a'
        int rightLimit = 122; // letter 'z'
        int targetStringLength = 10;
        Random random = new Random();
        StringBuilder buffer = new StringBuilder(targetStringLength);
        for (int i = 0; i < targetStringLength; i++) {
            int randomLimitedInt = leftLimit + (int)
                    (random.nextFloat() * (rightLimit - leftLimit + 1));
            buffer.append((char) randomLimitedInt);
        }
        String generatedString = buffer.toString();

        return generatedString;
    }
}
