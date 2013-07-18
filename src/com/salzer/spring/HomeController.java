package com.salzer.spring;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.inject.Inject;
import org.springframework.beans.BeanWrapper;
import org.springframework.beans.BeanWrapperImpl;
import org.springframework.beans.BeansException;
import org.springframework.context.support.MessageSourceAccessor;
import org.springframework.dao.DataRetrievalFailureException;
import com.documentum.fc.client.IDfSession;
import com.documentum.fc.client.IDfSessionManager;
import com.emc.xcp.persistence.documentum.SessionManagerProvider;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
	 @Inject
  private SessionManagerProvider sessionManagerProvider;
  
	private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
	

  public void setSessionManagerProvider(SessionManagerProvider sessionManagerProvider) {
    this.sessionManagerProvider = sessionManagerProvider;
  }
	/**
	 * Simply selects the home view to render by returning its na.
	 */
	@RequestMapping(value = "/hk", method = RequestMethod.GET)
	public  @ResponseBody String home(Locale locale, Model model) {
	
	    IDfSessionManager dfSessionManager = this.sessionManagerProvider.get();
    IDfSession dfSession = null;
	String formattedDate =null;
    try {
      dfSession = dfSessionManager.getSession(this.sessionManagerProvider.getRepository());
       logger.info("Welcome.....!"+dfSession.getLoginUserName());
      
    
    
		logger.info("Welcome home! the client locale is "+ locale.toString());
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);
		
	 formattedDate = dateFormat.format(date);
		String userName=dfSession.getLoginUserName();
		String hk="hariKrishna";
		model.addAttribute("hari",hk);
		model.addAttribute("lohith","lohith");
		model.addAttribute("loginName", userName );
		//model.addAttribute("session", dfSession );
		//model.addAttribute("serverTime", formattedDate );
		
	}
	catch (Exception e) {
	model.addAttribute("error",e);
	//model.addAttribute("serverTime", formattedDate );

	
	return "error";
//      //throw new DataRetrievalFailureException(this.messageSource.getMessage("E_PERSISTENCE_GET_OBJECTS_OF_TYPE_FAILED", new String[] { type.getSimpleName() }), e);
    }
	
	 
	finally {
      if (dfSession != null)
        dfSessionManager.release(dfSession);
    }
			return "hello";

	
}
}
