package pb.bas.apteczkaSpring.controller;

import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import pb.bas.apteczkaSpring.entity.Medicine;
import pb.bas.apteczkaSpring.entity.Pharmacy;
import pb.bas.apteczkaSpring.model.MedicineDetailsDTO;
import pb.bas.apteczkaSpring.model.MedicineItemDTO;
import pb.bas.apteczkaSpring.model.PharmacyBaseDTO;
import pb.bas.apteczkaSpring.model.PharmacyDetailsDTO;
import pb.bas.apteczkaSpring.repository.MedicineRepository;
import pb.bas.apteczkaSpring.repository.PharmacyRepository;

import javax.net.ssl.HttpsURLConnection;
import java.io.*;
import java.lang.reflect.Type;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping(path="/api/pharmacy")
@CrossOrigin(origins = "http://localhost:4200") //DEV
public class PharmacyController {
    @Autowired
    private PharmacyRepository pharmacyRepository;
    @Autowired
    private MedicineRepository medicineRepository;
    @Autowired
    private ModelMapper modelMapper;

    @GetMapping(path="/get")
    public PharmacyDetailsDTO getPharmacies(@RequestParam Integer id) {
        return modelMapper.map(pharmacyRepository.findById(id).orElseGet(null), PharmacyDetailsDTO.class);
    }

    @GetMapping(path="/all")
    public List<PharmacyBaseDTO> getAllMedicines() {
        Iterable<Pharmacy> entries = pharmacyRepository.findAll();
        Type listType = new TypeToken<List<PharmacyBaseDTO>>() {}.getType();
        List<PharmacyBaseDTO> result = modelMapper.map(entries, listType);
        return result;
    }

    @GetMapping(path="/delete")
    public void removePharmacie(@RequestParam Integer id) {
       Pharmacy pharmacy = pharmacyRepository.findById(id).orElse(null);
        if(pharmacy != null)
        {
            pharmacyRepository.deleteById(id);
        }
    }

    @PostMapping(path="/add")
    public void addPharmacy(@RequestBody Pharmacy pharmacy) throws IOException {
        pharmacyRepository.save(pharmacy);

        String str =  "{\n" +
                "\t\"email\": \"kstaniszewski@interia.eu\",\n" +
                "\t\"pharmacy_name\": \""+ pharmacy.getName()+"\"\n" +
                "}";

        String url = "https://prod-47.westeurope.logic.azure.com:443/workflows/21b6106e65d544a491b1877fbc92a3b7/triggers/manual/paths/invoke?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=-rF3Q-Tc4r84JVUyY68lzEBdFqIPBHYQ9E7dRMQUcRg";
        URL obj = new URL(url);
        HttpsURLConnection con = (HttpsURLConnection) obj.openConnection();

        //add reuqest header
        con.setRequestMethod("POST");
        con.setRequestProperty("Content-Type", "application/json");

        // Send post request
        con.setDoOutput(true);
        DataOutputStream wr = new DataOutputStream(con.getOutputStream());
        wr.writeBytes(str);
        wr.flush();
        wr.close();

        int responseCode = con.getResponseCode();
        System.out.println("\nSending 'POST' request to URL : " + url);
        System.out.println("Response Code : " + responseCode);

        BufferedReader in = new BufferedReader(
                new InputStreamReader(con.getInputStream()));
        String inputLine;
        StringBuffer response = new StringBuffer();

        while ((inputLine = in.readLine()) != null) {
            response.append(inputLine);
        }
        in.close();

        //print result
        System.out.println(response.toString());
    }

    @GetMapping(path="/addmedicine")
    public void addPharmacy(@RequestParam Integer id, @RequestParam Integer id2) {
        Medicine medicine = medicineRepository.findById(id2).orElseGet(null);
        Pharmacy pharmacy = pharmacyRepository.findById(id).orElseGet(null);
        pharmacy.getMedicines().add(medicine);
        pharmacyRepository.save(pharmacy);
    }

    @GetMapping(path="/deletemedicine")
    public void deletePharmacy(@RequestParam Integer id, @RequestParam Integer id2) {
        Medicine medicine = medicineRepository.findById(id2).orElseGet(null);
        Pharmacy pharmacy = pharmacyRepository.findById(id).orElseGet(null);
        pharmacy.getMedicines().remove(medicine);
        pharmacyRepository.save(pharmacy);
    }
}
